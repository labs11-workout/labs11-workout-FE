import React from "react";
import * as s from "../styles.js";
import { Card, CardBody, CardTitle } from "reactstrap";
import datefns from "date-fns";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const createWorkout = gql`
	mutation CreateWorkout($id: ID!, $scheduleId: ID!) {
		CreateWorkout(id: $id) {
			id
            name
            exercise
            completed
            schedule
            createdAt
            updatedAt
		}
	}
`;

const CreatedWorkout = ({ workout }) => {
	const w = workout;
	return (
		<s.Workout>
			<Card>
				<Mutation
					mutation={CreatedWorkout}
				>
					{(createdWorkout, { data }) => (
						<s.CreateButton
							onClick={() => createdWorkout({ variables: { id: w.id, scheduleId: w.scheduleId } })}
						>
							X
						</s.CreateButton>
					)}
							
				</Mutation>
				<CardTitle>
					{datefns.format(w.createdAt, "ddd, Do MMM YYYY h:mm a")}
				</CardTitle>
				<CardBody>
				    {w.id && <p>ID: {w.id}</p>}
                    {w.name && <p>Name: {w.name}</p>}
                    {w.exercise && <p>exercise: {w.exercise}</p>}
                    {w.completed && <p>Completed: {w.completed}</p>}
                    {w.schedule.id && <p>schedule: {w.schedule.id}</p>}
                    {w.createdAt && <p>Date: {w.createdAt}</p>}
                    {w.updatedAt && <p>Date: {w.updatedAt}</p>}

				</CardBody>
			</Card>
		</s.Workout>
	);
};

export default CreatedWorkout;