import React, {useState} from "react";
import * as s from "../styles.js";
import { Card, CardBody, CardTitle,InputGroup,Input,InputGroupText } from "reactstrap";
import datefns from "date-fns";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
// import { Scheduler } from "rxjs";


const createWorkout = gql`
	mutation AddWorkout($name: String!, $scheduleId: ID!) {
		addWorkout(name: $name, scheduleId: $scheduleId) {
			id
            name
            exercise{
				name
				interval
				intensity
				sets
				reps
				duration
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

const CreatedWorkout = () => {
const [workoutName]  = useState('');
	return (
		<s.Workout>
			<Card>
				<Mutation
					mutation={createWorkout}
				>
					{(addWorkout, { data }) => (
						<s.CreateButton
							onClick={() => createWorkout({ variables: {name: workoutName} })}
						>
							X
						</s.CreateButton>
					)}
					<input type='text' value={workoutName}></input>		
				</Mutation>
				<CardTitle>
					{datefns.format( "ddd, Do MMM YYYY h:mm a")}
				</CardTitle>
				<CardBody>
				<InputGroup>
					<InputGroupText>Workouts</InputGroupText>
					<Input
						value={workoutName}
						onChange={e => {
							workoutName(e.target.value);
						}}
						type="select"
					>
						{workoutName.map(w => {
							return (
								<option key={w.id} value={w.id}>
									{w.name} ({w.exercises.length} Exercise
									{w.exercises.length > 1 ? "s" : ""})
								</option>
							);
						})}
					</Input>
				</InputGroup>

				</CardBody>
			</Card>
		</s.Workout>
	);
};

export default CreatedWorkout;