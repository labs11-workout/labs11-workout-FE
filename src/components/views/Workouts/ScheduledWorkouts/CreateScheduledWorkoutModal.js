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
		}
	}
`;

const CreateScheduledWorkoutModal = ({ history, match, location, preset }) => {
	const [name, setName] = useState("");
	const [scheduleId, setScheduleId] = useState("");
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
						if (schedules.length > 0) {
							if (preset) {
								setScheduleId(location.pathname.split("/")[4]);
							} else {
								setScheduleId(schedules[0].id);
							}
						}

						return (
							<Mutation
								mutation={addWorkout}
								refetchQueries={() => [{ query: getSchedules }]}
							>
								{(createWorkout, { loading }) => {
									return (
										<>
											{schedules.length < 1 ? (
												"You don't have any Scheduled Workout Times to make a Workout for. Try creating one on the calendar!"
											) : (
												<Form
													onSubmit={e => {
														e.preventDefault();
														createWorkout({ variables: { name, scheduleId } });
														history.push("/workouts/scheduled");
													}}
												>
													<InputGroup>
														<InputGroupText>Schedule</InputGroupText>
														<Input
															required
															type="select"
															value={scheduleId}
															onChange={e => setScheduleId(e.target.value)}
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
														<InputGroupText>Name</InputGroupText>
														<Input
															required
															type="text"
															value={name}
															onChange={e => setName(e.target.value)}
														/>
													</InputGroup>
													<Button style={{ width: "100%" }} color="success">
														Create
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
