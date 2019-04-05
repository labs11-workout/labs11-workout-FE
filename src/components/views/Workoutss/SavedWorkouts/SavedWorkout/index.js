import React, { useState } from "react";
import { Route, withRouter } from "react-router-dom";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import * as s from "./styles";
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
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from "reactstrap";

import EditSavedWorkout from "./EditSavedWorkout";
import CreateSavedWorkoutExercise from "./CreateSavedWorkoutExercise";

const deleteSavedWorkout = gql`
	mutation DeleteSavedWorkout($id: ID!) {
		deleteSavedWorkout(id: $id) {
			id
		}
	}
`;

const getSavedWorkouts = gql`
	{
		getSavedWorkouts {
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

const SavedWorkout = ({ workout, history }) => {
	const [activeCollapse, setActiveCollapse] = useState("");
	const [settings, toggleSettings] = useState(false);
	const [deleteModalOpen, toggleDeleteModal] = useState(false);
	return (
		<>
			<s.WorkoutCard>
				<CardHeader>
					<h4>{workout.name}</h4>

					<Dropdown isOpen={settings} toggle={() => toggleSettings(!settings)}>
						<s.SettingButton color="primary">
							<i className="fas fa-cog" />
						</s.SettingButton>
						<DropdownMenu>
							<DropdownItem
								onClick={() => history.push(`/workouts/saved/${workout.id}`)}
							>
								Edit
							</DropdownItem>
							<s.DropdownItemDanger
								onClick={() => toggleDeleteModal(!deleteModalOpen)}
								color="danger"
							>
								Delete
							</s.DropdownItemDanger>
						</DropdownMenu>
					</Dropdown>
				</CardHeader>
				<CardBody>
					<h5 style={{ textAlign: "left" }}>Exercises</h5>
					<hr />
					{workout.exercises.map((e, i) => {
						return (
							<s.NestedCard key={i} body>
								<s.CardHead
									onClick={
										activeCollapse === i
											? () => setActiveCollapse("")
											: () => setActiveCollapse(i)
									}
									className={`${activeCollapse === i && "active"}`}
								>
									<span>
										{activeCollapse === i ? (
											<i className="fas fa-sort-up" />
										) : (
											<i className="fas fa-sort-down" />
										)}{" "}
										{e.name}
									</span>
								</s.CardHead>
								<Collapse isOpen={activeCollapse === i}>
									<s.CardMain>
										{e.intervals && <span>Intervals: {e.intervals}</span>}
										{e.sets && <span>Sets: {e.sets}</span>}
										{e.reps && <span>Reps: {e.reps}</span>}
										{e.duration && <span>Duration: {e.duration}</span>}
										{e.intensity && <span>Intensity: {e.intensity}</span>}
									</s.CardMain>
								</Collapse>
							</s.NestedCard>
						);
					})}
				</CardBody>
			</s.WorkoutCard>
			<Modal
				fade={false}
				centered
				isOpen={deleteModalOpen}
				toggle={() => toggleDeleteModal(!deleteModalOpen)}
			>
				<h5 style={{ margin: "16px", textAlign: "Center" }}>
					Are you sure you want to delete this?
				</h5>
				<Mutation
					mutation={deleteSavedWorkout}
					refetchQueries={() => [{ query: getSavedWorkouts }]}
				>
					{(deleteWorkout, { loading }) => {
						return (
							<s.DeleteButton
								onClick={() => deleteWorkout({ variables: { id: workout.id } })}
								color="danger"
							>
								{loading ? "Loading" : "Delete"}
							</s.DeleteButton>
						);
					}}
				</Mutation>
				<s.DeleteButton
					color="success"
					onClick={() => toggleDeleteModal(!deleteModalOpen)}
				>
					Cancel
				</s.DeleteButton>
			</Modal>
			<Route
				exact
				path={`/workouts/saved/${workout.id}`}
				render={() => <EditSavedWorkout history={history} workout={workout} />}
			/>
			<Route
				exact
				path={`/workouts/saved/${workout.id}/exercises/create`}
				render={() => (
					<CreateSavedWorkoutExercise history={history} workout={workout} />
				)}
			/>
		</>
	);
};

export default withRouter(SavedWorkout);
