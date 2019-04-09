import React from "react";
import * as s from "./styles";
import SavedWorkout from "./SavedWorkout/";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { Button } from "reactstrap";

const addSavedWorkout = gql`
	mutation AddSavedWorkout($name: String!) {
		addSavedWorkout(name: $name) {
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

const SavedWorkouts = ({ savedWorkouts }) => {
	return (
		<div>
			<h2>Saved Workouts</h2>
			<hr />
			<Mutation
				awaitRefetchQueries={true}
				mutation={addSavedWorkout}
				refetchQueries={() => [{ query: getSavedWorkouts }]}
			>
				{(addWorkout, { loading }) => {
					return (
						<Button
							color="success"
							onClick={() => addWorkout({ variables: { name: "New Workout" } })}
						>
							{loading ? "Loading" : "Create Workout"}
						</Button>
					);
				}}
			</Mutation>
			<s.WorkoutList>
				{savedWorkouts.map(s => {
					return <SavedWorkout key={s.id} workout={s} />;
				})}
			</s.WorkoutList>
		</div>
	);
};

export default SavedWorkouts;
