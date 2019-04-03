import React from "react";
import Protected from "../../Protected";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Workout from "./WorkoutsComponents/Workout.js";
import SavedWorkout from "./WorkoutsComponents/SavedWorkout.js";
import * as s from "./styles.js";
import CreatedWorkout from "./WorkoutsComponents/AddWorkout.js";
import DeletedWorkout from "./WorkoutsComponents/DeleteWorkout.js";
import UpdatedWorkout from "./WorkoutsComponents/EditWorkout.js";

const getWorkouts = gql`
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

const Workouts = props => {
	return (
		<>
		<Query query={getWorkouts}>
			{({ loading, error, data }) => {
				if (loading) return <p>Loading...</p>;
				if (error) return <p>{error.message}</p>;
				console.log(data);
				return (
					<>
						<s.WorkoutsContainer>
							{data.getSavedWorkouts.map(w => (
								<>
								<SavedWorkout workout={w} />
								<UpdatedWorkout workout={w} />
								<CreatedWorkout workout={w} />
								<DeletedWorkout workout={w}/>
								</>
							))}
						</s.WorkoutsContainer>
					</>
				);
			}}
		</Query>
		
		
	   </>
	);
};

export default Protected(Workouts);

