import React, { useState } from "react";
import {
	Modal,
	ModalHeader,
	ModalBody,
	Input,
	InputGroup,
	InputGroupText,
	Form,
	Button
} from "reactstrap";
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";
import dateFns from "date-fns";
import { Redirect } from "react-router-dom";

const getSchedules = gql`
	{
		getSchedules {
			id
			time
			workouts {
				id
				name
				completed
				exercises {
					id
					name
					reps
					sets
					duration
					intensity
					completed
				}
			}
		}
		getWorkouts {
			id
			name
			createdAt
			schedule {
				id
				time
			}
			exercises {
				id
				name
				intervals
				reps
				sets
				duration
				intensity
			}
		}
	}
`;

const addWorkout = gql`
	mutation AddWorkout($name: String!, $scheduleId: ID!) {
		addWorkout(scheduleId: $scheduleId, name: $name) {
			id
			name
			createdAt
			exercises {
				id
				name
				intervals
				reps
				sets
				duration
				intensity
			}
		}
	}
`;

const CreateScheduledWorkoutModal = ({ history, match, location, preset }) => {
	const [name, setName] = useState("");
	const [scheduleId, setScheduleId] = useState(
		preset ? location.pathname.split("/")[4] : ""
	);
	return (
		<Modal
			fade={false}
			centered
			isOpen={true}
			toggle={() => history.push("/workouts/scheduled")}
		>
			<ModalHeader>Create Workout</ModalHeader>
			<ModalBody>
				<Query query={getSchedules}>
					{({ loading, error, data }) => {
						if (loading) return <p>Loading...</p>;
						if (error) return <p>Error...</p>;
						let schedules = [];
						if (data.getSchedules.length > 0) {
							schedules = data.getSchedules
								.filter(g => g.time !== "Invalid Date")
								.sort((a, b) => {
									if (a.time > b.time) return -1;
									if (a.time < b.time) return 1;
									return 0;
								});
						}

						return (
							<Mutation
								awaitRefetchQueries={true}
								mutation={addWorkout}
								refetchQueries={() => [{ query: getSchedules }]}
							>
								{(createWorkout, { loading, data }) => {
									if (data && data.addWorkout) {
										return (
											<Redirect
												to={`/workouts/scheduled/${data.addWorkout.id}`}
											/>
										);
									}
									return (
										<>
											{schedules.length < 1 ? (
												"You don't have any Scheduled Workout Times to make a Workout for. Try creating one on the calendar!"
											) : (
												<Form
													onSubmit={e => {
														e.preventDefault();
														createWorkout({ variables: { name, scheduleId } });
													}}
												>
													<InputGroup>
														<InputGroupText>Schedule</InputGroupText>
														<Input
															required
															type="select"
															value={scheduleId}
															onChange={e => {
																console.log(e.target.value);
																setScheduleId(e.target.value);
															}}
														>
															{schedules.map((s, i) => {
																return (
																	<option key={s.id} value={s.id}>
																		{dateFns.format(s.time, "MMMM Do, h:mma")}
																	</option>
																);
															})}
														</Input>
													</InputGroup>
													<InputGroup>
														<InputGroupText>Workout Name</InputGroupText>
														<Input
															required
															type="text"
															value={name}
															onChange={e => setName(e.target.value)}
														/>
													</InputGroup>
													<Button style={{ width: "100%" }} color="primary">
														{loading ? "Loading..." : "Create Workout"}
													</Button>
												</Form>
											)}
										</>
									);
								}}
							</Mutation>
						);
					}}
				</Query>
			</ModalBody>
		</Modal>
	);
};

export default CreateScheduledWorkoutModal;
