import React, { useState } from "react";
import { Route, withRouter } from "react-router-dom";
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";
import * as s from "./styles";
import {
	Modal,
	CardHeader,
	CardBody,
	Collapse,
	Dropdown,
	DropdownMenu,
	DropdownItem
} from "reactstrap";

import EditSavedWorkout from "./EditSavedWorkout";
import CreateSavedWorkoutExercise from "./CreateSavedWorkoutExercise";
import EditSavedWorkoutExerciseModal from "./EditSavedWorkoutExerciseModal";

const deleteSavedWorkout = gql`
	mutation DeleteSavedWorkout($id: ID!) {
		deleteSavedWorkout(id: $id) {
			id
		}
	}
`;

const getProfile = gql`
	{
		getProfile {
			id
			authId
			premium
			savedWorkouts {
				id
			}
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

const getExercise = gql`
	query GetExercise($id: ID!) {
		getExercise(id: $id) {
			id
			name
			sets
			reps
			intervals
			duration
			intensity
			completed
			savedWorkout {
				id
			}
		}
	}
`;

const SavedWorkout = ({ workout, history, match, location }) => {
	const [activeCollapse, setActiveCollapse] = useState("");
	const [settings, toggleSettings] = useState(false);
	const [deleteModalOpen, toggleDeleteModal] = useState(false);
	return (
		<>
			<s.WorkoutCard>
				<CardHeader>
					<h4>{workout.name}</h4>

					<Dropdown isOpen={settings} toggle={() => toggleSettings(!settings)}>
						<s.SettingButton>
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
										{e.intervals > 0 && <span>Intervals: {e.intervals}</span>}
										{e.sets > 0 && <span>Sets: {e.sets}</span>}
										{e.reps > 0 && <span>Reps: {e.reps}</span>}
										{e.duration > 0 && <span>Duration: {e.duration}</span>}
										{e.intensity > 0 && <span>Intensity: {e.intensity}</span>}
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
					awaitRefetchQueries={true}
					mutation={deleteSavedWorkout}
					refetchQueries={() => [
						{ query: getSavedWorkouts },
						{ query: getProfile }
					]}
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
				<s.CancelButton
					onClick={() => toggleDeleteModal(!deleteModalOpen)}
				>
					Cancel
				</s.CancelButton>
			</Modal>
			<Route
				exact
				path={`/workouts/saved/${workout.id}`}
				render={() => <EditSavedWorkout history={history} workout={workout} />}
			/>
			<Route
				exact
				path={`/workouts/saved/${workout.id}/exercises/c/new`}
				render={() => (
					<CreateSavedWorkoutExercise history={history} workout={workout} />
				)}
			/>
			<Route
				exact
				path={`/workouts/saved/${workout.id}/exercises/:exerciseId`}
				render={() => {
					return (
						<Query
							query={getExercise}
							variables={{ id: location.pathname.split("/")[5] }}
						>
							{({ loading, error, data }) => {
								if (loading) return <p>Loading...</p>;
								if (error) return <p>{error.message}</p>;
								return (
									<EditSavedWorkoutExerciseModal
										workout={workout}
										match={match}
										exercise={data.getExercise}
										history={history}
									/>
								);
							}}
						</Query>
					);
				}}
			/>
		</>
	);
};

export default withRouter(SavedWorkout);
