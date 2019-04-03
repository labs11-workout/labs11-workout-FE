import React, {useState} from "react";
import * as s from "../styles.js";
import { Card, CardBody, CardTitle } from "reactstrap";
import datefns from "date-fns";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const updateWorkout = gql`
	mutation UpdateWorkout($id: ID!, $name: String!) {
		updateWorkout(id: $id, name: $name) {
			id
            name
            exercise {
				name 
				interval
				duration
				sets
				reps
				intensity
			}
            completed
            schedule {
				id
				time
			}
            createdAt
            updatedAt
		}
	}
`;

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

const UpdatedWorkout = ({ workout }) => {
	const w = workout;
	const [workoutName, setWorkout] = useState(w.name);
	return (
		<s.Workout>
			<Card>
				<Mutation
					mutation={updateWorkout}
					refetchQueries={() => [{ query: getWorkouts }]}
				>
					{(updateWorkout, { data }) => (
						<s.UpdateButton
							onClick={() => updateWorkout({ variables: { id: w.id, name: workoutName } })}
						>
							X
						</s.UpdateButton>
					)}
					<input type="text" value={workoutName} onChange={(e) => setWorkout(e.target.value)}></input>
				</Mutation>
				<CardTitle>
					{datefns.format(w.createdAt, "ddd, Do MMM YYYY h:mm a")}
				</CardTitle>
				<CardBody>
					{w.id && <p>ID: {w.id}</p>}
					{w.name && <p>Name: {w.name}</p>}
					{w.updatedAt && <p>Date: {w.updatedAt}</p>}
				</CardBody>
			</Card>
		</s.Workout>
	);
};

export default UpdatedWorkout;