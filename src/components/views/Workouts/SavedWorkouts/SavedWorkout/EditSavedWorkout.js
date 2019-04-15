import React, { useState } from "react";

import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import * as s from "./styles";
import {
	Modal,
	ModalHeader,
	ModalBody,
	InputGroup,
	Input,
	InputGroupText
} from "reactstrap";

import EditSavedWorkoutExercise from "./EditSavedWorkoutExercise";

const editSavedWorkout = gql`
	mutation EditSavedWorkout($id: ID!, $name: String!) {
		editSavedWorkout(id: $id, name: $name) {
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

const EditSavedWorkout = ({ workout, history }) => {
	const [workoutName, setWorkoutName] = useState(workout.name);
	const [activeCollapse, setActiveCollapse] = useState("");
	return (
		<Modal
			fade={false}
			centered
			isOpen={true}
			toggle={() => history.push(`/workouts/saved`)}
		>
			<ModalHeader>{workout.name}</ModalHeader>
			<ModalBody>
				<s.UpdateWorkout>
					<InputGroup>
						<InputGroupText>Name</InputGroupText>
						<Input
							type="text"
							value={workoutName}
							onChange={e => setWorkoutName(e.target.value)}
						/>
					</InputGroup>
					<Mutation awaitRefetchQueries={true} mutation={editSavedWorkout}>
						{(editWorkout, { loading }) => {
							return (
								<s.CreateButton
									onClick={() =>
										editWorkout({
											variables: { id: workout.id, name: workoutName }
										})
									}
								>
									{loading ? "Loading" : "Update Workout Name"}
								</s.CreateButton>
							);
						}}
					</Mutation>
				</s.UpdateWorkout>
				<s.ExercisesHeader>
					<h5 style={{ textAlign: "left", marginTop: "6px" }}>Exercises</h5>
					<s.CreateButton
						color="primary"
						onClick={() =>
							history.push(`/workouts/saved/${workout.id}/exercises/c/new`)
						}
					>
						<i className="fas fa-plus" />
					</s.CreateButton>
					<hr />
				</s.ExercisesHeader>
				{workout.exercises.map((e, i) => {
					return (
						<EditSavedWorkoutExercise
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
		</Modal>
	);
};

export default EditSavedWorkout;
