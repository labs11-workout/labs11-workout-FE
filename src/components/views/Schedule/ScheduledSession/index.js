import React, { useState } from "react";
import * as s from "./styles";
import { withRouter, Route, Link } from "react-router-dom";
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
	InputGroupText,
	Collapse,
	Dropdown,
	DropdownMenu,
	DropdownItem,
	DropdownToggle
} from "reactstrap";

const getWorkout = gql`
	query GetWorkout($id: ID!) {
		getWorkout(id: $id) {
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
`;

const editWorkout = gql`
	mutation EditWorkout($id: ID!, $name: String, $completed: Boolean) {
		editWorkout(id: $id, name: $name, completed: $completed) {
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
`;

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
				id
				name
				sets
				reps
				intervals
				duration
			}
		}
	}
`;

const deleteWorkout = gql`
	mutation DeleteWorkout($id: ID!) {
		deleteWorkout(id: $id) {
			id
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
	}
`;

const editExercise = gql`
	mutation EditExercise(
		$exerciseId: ID!
		$sets: Int
		$reps: Int
		$intervals: Int
		$duration: Float
		$intensity: Int
		$name: String
		$completed: Boolean
	) {
		editExercise(
			exerciseId: $exerciseId
			sets: $sets
			reps: $reps
			intervals: $intervals
			duration: $duration
			intensity: $intensity
			name: $name
			completed: $completed
		) {
			id
			name
			reps
			sets
			duration
			intensity
			completed
		}
	}
`;

const ScheduledSession = ({ schedule, showDeleteButton, match, history }) => {
	const [activeTab, toggleTab] = useState(0);
	const [savedWorkoutId, setSavedWorkoutId] = useState("");
	const [activeCollapse, setActiveCollapse] = useState("");
	const [settings, toggleSettings] = useState(""); //Dropdown Settings for Workout Tabs

	const day = new Date(schedule.time);
	const monthDayYear = dateFns.format(day, "MM-DD-YYYY");

	return (
		<>
			<s.DaySchedule
				key={schedule.id}
				onClick={e => {
					// e.stopPropagation();
					// toggleModal(!modalOpen);
					history.push(
						`/schedule/${monthDayYear}/${dateFns.format(day, "D")}/${
							schedule.id
						}`
					);
				}}
			>
				{schedule.workouts.length} Workout
				{schedule.workouts.length > 1 || schedule.workouts.length === 0
					? "s"
					: ""}{" "}
				@ {dateFns.format(schedule.time, "h:mma")}
				{showDeleteButton && (
					<Mutation
						awaitRefetchQueries={true}
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
			<Route
				exact
				path={`/schedule/${monthDayYear}/${dateFns.format(day, "D")}/${
					schedule.id
				}`}
				render={() => (
					<Modal
						fade={false}
						size="lg"
						centered
						isOpen={true}
						toggle={() => history.push(`/schedule/${monthDayYear}`)}
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
										if (
											savedWorkoutId === "" &&
											data.getSavedWorkouts.length > 0
										) {
											setSavedWorkoutId(data.getSavedWorkouts[0].id);
										}
										return (
											<>
												{data.getSavedWorkouts.length > 0 ? (
													<>
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
														<Mutation
															awaitRefetchQueries={true}
															mutation={addWorkoutFromSavedWorkout}
															refetchQueries={() => [{ query: getSchedules }]}
														>
															{(
																addWorkoutFromSavedWorkout,
																{ loading, error, data }
															) => {
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
													</>
												) : (
													<span style={{ width: "100%", textAlign: "center" }}>
														You don't have any saved workouts.{" "}
														<Link to="/workouts/saved">Try Adding One!</Link>
													</span>
												)}
											</>
										);
									}}
								</Query>
							</s.AddWorkout>
							<Button
								color="primary"
								style={{ width: "100%" }}
								onClick={() =>
									history.push(`/workouts/scheduled/create/${schedule.id}`)
								}
							>
								Create New Workout
							</Button>
							<hr />
							{schedule.workouts.length > 0 ? (
								<>
									<Nav tabs>
										{schedule.workouts.map((w, i) => {
											return (
												<NavItem key={w.id}>
													<s.TabLink
														className={classnames({
															active: activeTab === i
														})}
														onClick={() => toggleTab(i)}
													>
														{w.name}
														<Dropdown
															isOpen={settings === w.id}
															toggle={ev => {
																ev.stopPropagation();
																if (settings !== w.id) {
																	toggleSettings(w.id);
																} else {
																	toggleSettings("");
																}
															}}
														>
															<s.SettingsButton color="link">
																<i className="fas fa-cog" />
															</s.SettingsButton>

															<DropdownMenu>
																<DropdownItem
																	onClick={() =>
																		history.push(`/workouts/scheduled/${w.id}`)
																	}
																>
																	Edit
																</DropdownItem>
																<Mutation
																	awaitRefetchQueries={true}
																	mutation={deleteWorkout}
																	refetchQueries={() => [
																		{
																			query: getSchedules
																		}
																	]}
																>
																	{(delWorkout, { loading, error, data }) => {
																		return (
																			<s.DropdownItemDanger
																				toggle={false}
																				onClick={() =>
																					delWorkout({
																						variables: { id: w.id }
																					})
																				}
																				color="danger"
																			>
																				{loading ? "Deleting..." : "Delete"}
																			</s.DropdownItemDanger>
																		);
																	}}
																</Mutation>
															</DropdownMenu>
														</Dropdown>
													</s.TabLink>
												</NavItem>
											);
										})}
									</Nav>
									<TabContent activeTab={activeTab}>
										{schedule.workouts.map((w, i) => {
											return (
												<TabPane tabId={i} key={i}>
													<Card body>
														<s.CardHead>
															Exercises
															<Mutation
																awaitRefetchQueries={true}
																mutation={editWorkout}
																refetchQueries={() => [
																	{
																		query: getWorkout,
																		variables: { id: w.id }
																	}
																]}
															>
																{(updateWorkout, { loading, error, data }) => {
																	return (
																		<s.CompletedExercise>
																			Completed:{" "}
																			{loading ? (
																				<i class="fas fa-spinner completed fa-spin" />
																			) : w.completed ? (
																				<i
																					className="fas fa-check-square completed"
																					onClick={ev => {
																						ev.stopPropagation();
																						updateWorkout({
																							variables: {
																								id: w.id,
																								completed: false
																							}
																						});
																					}}
																				/>
																			) : (
																				<i
																					className="far fa-square not-completed"
																					onClick={ev => {
																						ev.stopPropagation();
																						updateWorkout({
																							variables: {
																								id: w.id,
																								completed: true
																							}
																						});
																					}}
																				/>
																			)}
																		</s.CompletedExercise>
																	);
																}}
															</Mutation>
														</s.CardHead>
														<CardBody>
															{w.exercises.length > 0 ? (
																<>
																	{w.exercises.map((e, i) => (
																		<s.NestedCard key={i} body>
																			<s.CardHead
																				onClick={
																					activeCollapse === i
																						? () => setActiveCollapse("")
																						: () => setActiveCollapse(i)
																				}
																				className={`${activeCollapse === i &&
																					"active"}`}
																			>
																				<span>
																					{activeCollapse === i ? (
																						<i className="fas fa-sort-up" />
																					) : (
																						<i className="fas fa-sort-down" />
																					)}{" "}
																					{e.name}
																				</span>
																				<Mutation
																					awaitRefetchQueries={true}
																					mutation={editExercise}
																					refetchQueries={() => [
																						{
																							query: getWorkout,
																							variables: { id: w.id }
																						}
																					]}
																				>
																					{(editExercise, { loading }) => {
																						return (
																							<s.CompletedExercise>
																								Completed:{" "}
																								{loading ? (
																									<i class="fas fa-spinner completed fa-spin" />
																								) : e.completed ? (
																									<i
																										className="fas fa-check-square completed"
																										onClick={ev => {
																											ev.stopPropagation();
																											editExercise({
																												variables: {
																													exerciseId: e.id,
																													completed: false
																												}
																											});
																										}}
																									/>
																								) : (
																									<i
																										className="far fa-square not-completed"
																										onClick={ev => {
																											ev.stopPropagation();
																											editExercise({
																												variables: {
																													exerciseId: e.id,
																													completed: true
																												}
																											});
																										}}
																									/>
																								)}
																							</s.CompletedExercise>
																						);
																					}}
																				</Mutation>
																			</s.CardHead>
																			<Collapse isOpen={activeCollapse === i}>
																				<s.CardMain>
																					{e.intervals > 0 && (
																						<span>
																							Intervals: {e.intervals}
																						</span>
																					)}
																					{e.sets > 0 && (
																						<span>Sets: {e.sets}</span>
																					)}
																					{e.reps > 0 && (
																						<span>Reps: {e.reps}</span>
																					)}
																					{e.duration > 0 && (
																						<span>Duration: {e.duration}</span>
																					)}
																					{e.intensity > 0 && (
																						<span>
																							Intensity: {e.intensity}
																						</span>
																					)}
																				</s.CardMain>
																			</Collapse>
																		</s.NestedCard>
																	))}
																</>
															) : (
																<span>
																	You don't have any exercises for this workout.
																	Try adding one!
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
								awaitRefetchQueries={true}
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
							<s.CloseButton
								onClick={() =>
									history.push(`/schedule/${match.params.monthDayYear}`)
								}
							>
								<i className="fas fa-times" />
							</s.CloseButton>
							<s.BackButton onClick={() => history.goBack()}>
								<i className="fas fa-arrow-left" /> Go Back
							</s.BackButton>
						</ModalFooter>
					</Modal>
				)}
			/>
		</>
	);
};

export default withRouter(ScheduledSession);
