import React from "react";
import * as s from "./styles";
import SavedWorkout from "./SavedWorkout/";
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";

const addSavedWorkout = gql`
	mutation AddSavedWorkout($name: String!) {
		addSavedWorkout(name: $name) {
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

const SavedWorkouts = ({ savedWorkouts, history }) => {
	return (
		<div>
			<h2>Workout Templates</h2>
			<hr />
			<Query query={getProfile}>
				{({ loading, error, data }) => {
					if (loading) return <p>Loading</p>;
					if (
						!data.getProfile.premium &&
						data.getProfile.savedWorkouts.length >= 3
					) {
						return (
							<p>
								You must be Premium to create more than 3 Workout Templates!
							</p>
						);
					} else {
						return (
							<Mutation
								awaitRefetchQueries={true}
								mutation={addSavedWorkout}
								refetchQueries={() => [
									{ query: getSavedWorkouts },
									{ query: getProfile }
								]}
								onCompleted={data =>
									history.push(`/workouts/saved/${data.addSavedWorkout.id}`)
								}
							>
								{(addWorkout, { l = loading }) => {
									return (
										<s.CreateButton
											onClick={() =>
												addWorkout({ variables: { name: "New Workout" } })
											}
										>
											{l ? "Loading" : "Create Workout Template"}
										</s.CreateButton>
									);
								}}
							</Mutation>
						);
					}
				}}
			</Query>
			<s.WorkoutList>
				{savedWorkouts.map(s => {
					return <SavedWorkout key={s.id} workout={s} />;
				})}
			</s.WorkoutList>
		</div>
	);
};

export default SavedWorkouts;
