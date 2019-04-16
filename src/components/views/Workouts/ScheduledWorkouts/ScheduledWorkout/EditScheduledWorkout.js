import React, { useState } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import * as s from "./styles";
import dateFns from "date-fns";
import {
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	InputGroup,
	Input,
	InputGroupText
} from "reactstrap";

import EditScheduledWorkoutExercise from "./EditScheduledWorkoutExercise";

const editScheduledWorkout = gql`
	mutation EditWorkout($id: ID!, $name: String!) {
		editWorkout(id: $id, name: $name) {
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

const EditScheduledWorkout = ({ workout, history }) => {
	const [workoutName, setWorkoutName] = useState(workout.name);
	const [activeCollapse, setActiveCollapse] = useState("");
	return (
		<Modal
			fade={false}
			centered
			isOpen={true}
			toggle={() => history.push(`/workouts/scheduled`)}
		>
			<ModalHeader>{workout.name}</ModalHeader>
			<ModalBody>
				<s.UpdateWorkout>
					<InputGroup>
						<InputGroupText>Workout Name</InputGroupText>
						<Input
							type="text"
							value={workoutName}
							onChange={e => setWorkoutName(e.target.value)}
						/>
					</InputGroup>
					<Mutation awaitRefetchQueries={true} mutation={editScheduledWorkout}>
						{(editWorkout, { loading }) => {
							return (
								<s.SecondaryButton
									onClick={() =>
										editWorkout({
											variables: { id: workout.id, name: workoutName }
										})
									}
								>
									{loading ? "Loading" : "Update Workout Name"}
								</s.SecondaryButton>
							);
						}}
					</Mutation>
				</s.UpdateWorkout>
				<s.ExercisesHeader>
					<h5 style={{ textAlign: "left", marginTop: "6px" }}>Exercises</h5>
					<s.SecondaryButton
						onClick={() =>
							history.push(`/workouts/scheduled/${workout.id}/exercises/c/new`)
						}
					>
						<i className="fas fa-plus" />
					</s.SecondaryButton>
					<hr />
				</s.ExercisesHeader>
				{workout.exercises.map((e, i) => {
					return (
						<EditScheduledWorkoutExercise
							exercise={e}
							key={i}
							index={i}
							activeCollapse={activeCollapse}
							setActiveCollapse={setActiveCollapse}
							history={history}
							workout={workout}
						/>
					);
				})}
			</ModalBody>
			<ModalFooter style={{ justifyContent: "flex-start" }}>
				<span
					onClick={() =>
						history.push(
							`/schedule/${dateFns.format(
								workout.schedule.time,
								"MM-DD-YYYY"
							)}/${dateFns.format(workout.schedule.time, "D")}/${
								workout.schedule.id
							}`
						)
					}
				>
					<i className="fas fa-arrow-left" /> Go To Scheduled Session
				</span>
			</ModalFooter>
		</Modal>
	);
};

export default EditScheduledWorkout;
