import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import * as s from "./styles";
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	TabContent,
	TabPane,
	Card,
	CardHeader,
	CardBody,
	InputGroup,
	Input,
	InputGroupText,
	Collapse
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
						<InputGroupText>Name</InputGroupText>
						<Input
							type="text"
							value={workoutName}
							onChange={e => setWorkoutName(e.target.value)}
						/>
					</InputGroup>
					<Mutation awaitRefetchQueries={true} mutation={editScheduledWorkout}>
						{(editWorkout, { loading }) => {
							return (
								<Button
									color="success"
									onClick={() =>
										editWorkout({
											variables: { id: workout.id, name: workoutName }
										})
									}
								>
									{loading ? "Loading" : "Update Workout Name"}
								</Button>
							);
						}}
					</Mutation>
				</s.UpdateWorkout>
				<s.ExercisesHeader>
					<h5 style={{ textAlign: "left", marginTop: "6px" }}>Exercises</h5>
					<Button
						color="success"
						onClick={() =>
							history.push(`/workouts/scheduled/${workout.id}/exercises/c/new`)
						}
					>
						<i className="fas fa-plus" />
					</Button>
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
		</Modal>
	);
};

export default EditScheduledWorkout;
