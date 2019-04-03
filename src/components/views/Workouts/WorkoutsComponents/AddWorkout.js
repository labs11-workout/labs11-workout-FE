import React, {useState} from "react";
import * as s from "../styles.js";
import { Card, CardBody, CardTitle,InputGroup,Input,InputGroupText } from "reactstrap";
import datefns from "date-fns";
import { Mutation, Query } from "react-apollo";
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
                    name
                    reps
                    sets
                    duration
                    intensity
                }
            }
        }
    }
`;


const CreatedWorkout = () => {
const [workoutName, setWorkoutName]  = useState('');
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
						
				</Mutation>
				<input type='text' value={workoutName}></input>	
				<CardTitle>
					{/* {datefns.format(new Date(), "ddd, Do MMM YYYY h:mm a")} */}
					Add Workout
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
						<Query query={getSchedules}>
							{({loading, error, data}) => {
								if(loading) return "Loading..."
								if(error) return "Error..."
								return <>
									{data.getSchedules.map(s => {
										return <option key={s.id} value={s.id}>
											{datefns.format(s.time, "ddd, mmm, h:mma")}
											</option>
									})}
								</>
							}}
						</Query>
						
					</Input>
				</InputGroup>

				</CardBody>
			</Card>
		</s.Workout>
	);
};

export default CreatedWorkout;