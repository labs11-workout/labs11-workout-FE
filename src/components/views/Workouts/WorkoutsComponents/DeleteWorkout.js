import React from "react";
import * as s from "../styles.js";
import { Card, CardBody, CardTitle } from "reactstrap";
import datefns from "date-fns";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const deleteWorkout = gql`
	mutation DeleteWorkout($id: ID!) {
		deleteWorkout(id: $id) {
			id
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


const DeletedWorkout = ({ workout }) => {
	const w = workout;
	return (
		<s.Workout>
			<Card>
				<Mutation
					mutation={deleteWorkout}
					refetchQueries={() => [{ query: getWorkouts }]}
				>
					{(deleteWorkout, { data }) => (
						<s.DeleteButton
							onClick={() => deleteWorkout({ variables: { id: w.id } })}
						>
							X
						</s.DeleteButton>
					)}
				</Mutation>
				<CardTitle>
					{datefns.format(w.createdAt, "ddd, Do MMM YYYY h:mm a")}
					
				</CardTitle>
				<CardBody>
					{w.id && <p>ID: {w.id}</p>}
					{w.name && <p>Name: {w.name}</p>}
					{w.createdAt && <p>Date: {w.createdAt}</p>}
				</CardBody>
			</Card>
		</s.Workout>
	);
};

export default DeletedWorkout;