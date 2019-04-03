import React, { useState } from "react";
import * as s from "./styles";
import dateFns from "date-fns";
import classnames from "classnames";
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";

import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	TabContent,
	TabPane,
	Nav,
	NavItem,
	NavLink,
	Card,
	CardHeader,
	CardBody,
	InputGroup,
	Input,
	InputGroupText
} from "reactstrap";

const deleteSchedule = gql`
	mutation DeleteSchedule($id: ID!) {
		deleteSchedule(id: $id) {
			id
		}
	}
`;

const addWorkoutFromSavedWorkout = gql`
	mutation AddWorkoutFromSavedWorkout($scheduleId: ID!, $savedWorkoutId: ID!) {
		addWorkoutFromSavedWorkout(
			scheduleId: $scheduleId
			savedWorkoutId: $savedWorkoutId
		) {
			id
			name
			exercises {
				name
				sets
				reps
				intervals
				duration
			}
		}
	}
`;

const getSavedWorkouts = gql`
	{
		getSavedWorkouts {
			id
			name
			exercises {
				id
			}
		}
	}
`;

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
					name
					reps
					sets
					duration
					intensity
				}
			}
		}
	}
`;

const getSchedule = gql`
	query GetSchedule($id: ID!) {
		getSchedule(id: $id) {
			id
			time
			workouts {
				id
				name
				completed
				exercises {
					name
					reps
					sets
					duration
					intensity
				}
			}
		}
	}
`;

const ScheduledSession = ({ schedule, showDeleteButton }) => {
	const [modalOpen, toggleModal] = useState(false);
	const [activeTab, toggleTab] = useState(0);
	const [savedWorkoutId, setSavedWorkoutId] = useState("");

	return (
		<>
			<s.DaySchedule
				key={schedule.id}
				onClick={e => {
					// e.stopPropagation();
					// toggleModal(!modalOpen);
				}}
			>
				{schedule.workouts.length} Workout
				{schedule.workouts.length > 1 || schedule.workouts.length === 0
					? "s"
					: ""}{" "}
				@ {dateFns.format(schedule.time, "h:mma")}
				{showDeleteButton && (
					<Mutation
						mutation={deleteSchedule}
						refetchQueries={() => [{ query: getSchedules }]}
					>
						{(deleteSchedule, { loading, data }) => {
							return (
								<s.DeleteButton
									onClick={e => {
										e.stopPropagation();
										deleteSchedule({ variables: { id: schedule.id } });
									}}
								>
									{loading ? (
										<i className="fas fa-circle-notch fa-spin" />
									) : (
										<i className="fas fa-minus-square" />
									)}
								</s.DeleteButton>
							);
						}}
					</Mutation>
				)}
			</s.DaySchedule>

			{/* Scheduled Session Modal Containing Information */}
			<Modal
				size="lg"
				centered
				isOpen={modalOpen}
				toggle={() => toggleModal(!modalOpen)}
			>
				<ModalHeader>
					{dateFns.format(schedule.time, "MMMM Do, h:mma")} -{" "}
					{schedule.workouts.length} Workout
					{schedule.workouts.length > 1 || schedule.workouts.length === 0
						? "s"
						: ""}
				</ModalHeader>
				<ModalBody>
					<s.AddWorkout>
						<Query query={getSavedWorkouts}>
							{({ loading, error, data }) => {
								if (loading) return <p>Loading Saved Workouts...</p>;
								if (error) return <p>Error...</p>;
								return (
									<InputGroup>
										<InputGroupText>Saved Workouts</InputGroupText>
										<Input
											value={savedWorkoutId}
											onChange={e => {
												setSavedWorkoutId(e.target.value);
											}}
											type="select"
										>
											{data.getSavedWorkouts.map(w => {
												return (
													<option key={w.id} value={w.id}>
														{w.name} ({w.exercises.length} Exercise
														{w.exercises.length > 1 ? "s" : ""})
													</option>
												);
											})}
										</Input>
									</InputGroup>
								);
							}}
						</Query>
						<Mutation
							mutation={addWorkoutFromSavedWorkout}
							refetchQueries={() => [
								{ query: getSchedule, variables: { id: schedule.id } }
							]}
						>
							{(addWorkoutFromSavedWorkout, { loading, error, data }) => {
								return (
									<Button
										color="success"
										onClick={() =>
											addWorkoutFromSavedWorkout({
												variables: {
													scheduleId: schedule.id,
													savedWorkoutId
												}
											})
										}
									>
										{loading ? "Loading..." : "Add Workout"}
									</Button>
								);
							}}
						</Mutation>
					</s.AddWorkout>
					{schedule.workouts.length > 0 ? (
						<>
							<Nav tabs>
								{schedule.workouts.map((w, i) => {
									return (
										<NavItem key={w.id}>
											<NavLink
												className={classnames({
													active: activeTab === i
												})}
												onClick={() => toggleTab(i)}
											>
												{w.name}
											</NavLink>
										</NavItem>
									);
								})}
							</Nav>
							<TabContent activeTab={activeTab}>
								{schedule.workouts.map((w, i) => {
									return (
										<TabPane tabId={i} key={i}>
											<Card body>
												<CardHeader>Exercises</CardHeader>
												<CardBody>
													{w.exercises.length > 0 ? (
														<>
															{w.exercises.map((e, i) => (
																<Card key={i} body>
																	<CardHeader>{e.name}</CardHeader>
																	<CardBody>
																		{e.intervals && (
																			<p>Intervals: {e.intervals}</p>
																		)}
																		{e.sets && <p>Sets: {e.sets}</p>}
																		{e.reps && <p>Reps: {e.reps}</p>}
																		{e.duration && (
																			<p>Duration: {e.duration}</p>
																		)}
																		{e.intensity && (
																			<p>Intensity: {e.intensity}</p>
																		)}
																	</CardBody>
																</Card>
															))}
														</>
													) : (
														<span>
															You don't have any exercises for this workout. Try
															adding one!
														</span>
													)}
												</CardBody>
											</Card>
										</TabPane>
									);
								})}
							</TabContent>
						</>
					) : (
						<span>You don't have any workouts. Try adding one!</span>
					)}
				</ModalBody>
				<ModalFooter>
					<Mutation
						mutation={deleteSchedule}
						refetchQueries={() => [{ query: getSchedules }]}
					>
						{(deleteSchedule, { loading, data }) => {
							if (loading) {
								return (
									<Button color="danger">
										<i className="fas fa-circle-notch fa-spin" />
									</Button>
								);
							} else {
								return (
									<Button
										color="danger"
										onClick={e => {
											e.stopPropagation();
											deleteSchedule({ variables: { id: schedule.id } });
										}}
									>
										Delete Workout Session
									</Button>
								);
							}
						}}
					</Mutation>
					<s.CloseButton onClick={() => toggleModal(!modalOpen)}>
						<i className="fas fa-times" />
					</s.CloseButton>
				</ModalFooter>
			</Modal>
		</>
	);
};

export default ScheduledSession;
