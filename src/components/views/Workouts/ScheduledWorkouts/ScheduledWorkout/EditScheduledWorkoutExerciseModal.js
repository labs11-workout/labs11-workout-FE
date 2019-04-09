import React, { useState } from "react";
import { Query, Mutation } from "react-apollo";
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
	Collapse,
	Form
} from "reactstrap";

const getExercise = gql`
	query GetExercise($id: ID!) {
		getExercise(id: $id) {
			id
			name
			sets
			reps
			intervals
			duration
			intensity
			completed
			savedWorkout {
				id
			}
		}
	}
`;

const editExercise = gql`
	mutation EditExercise(
		$sets: Int
		$reps: Int
		$intervals: Int
		$duration: Float
		$name: String!
		$exerciseId: ID!
	) {
		editExercise(
			sets: $sets
			reps: $reps
			intervals: $intervals
			duration: $duration
			name: $name
			exerciseId: $exerciseId
		) {
			id
		}
	}
`;

const getWorkout = gql`
	query GetWorkout($id: ID!) {
		getWorkout(id: $id) {
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

const getWorkouts = gql`
	{
		getSchedules {
			id
			time
			workouts {
				id
				name
				completed
				exercises {
					id
					name
					reps
					sets
					duration
					intensity
					completed
				}
			}
		}
		getWorkouts {
			id
			name
			completed
			exercises {
				id
				name
				reps
				sets
				duration
				intensity
				completed
			}
		}
	}
`;

const EditScheduledWorkoutExerciseModal = ({
	workout,
	match,
	exercise,
	history
}) => {
	const [name, setName] = useState(exercise.name);
	const [intervals, setIntervals] = useState(exercise.intervals || "");
	const [reps, setReps] = useState(exercise.reps || "");
	const [sets, setSets] = useState(exercise.sets || "");
	const [duration, setDuration] = useState(exercise.duration || "");
	const [intensity, setIntensity] = useState(exercise.intensity || "");
	return (
		<Modal
			fade={false}
			centered
			isOpen={true}
			toggle={() => history.push(`/workouts/scheduled/${workout.id}`)}
		>
			<ModalHeader>Update Exercise</ModalHeader>
			<ModalBody>
				<Mutation
					awaitRefetchQueries={true}
					mutation={editExercise}
					refetchQueries={() => [
						{ query: getWorkout, variables: { id: workout.id } }
					]}
				>
					{(editExercise, { loading }) => {
						return (
							<s.CreationForm
								onSubmit={e => {
									e.preventDefault();
									let properties = {};
									if (name !== "") {
										properties.name = name;
									}
									if (intervals !== "" || 0 || "0") {
										properties.intervals = Number(intervals);
									}
									if (reps !== "" || 0 || "0") {
										properties.reps = Number(reps);
									}
									if (sets !== "" || 0 || "0") {
										properties.sets = Number(sets);
									}
									if (duration !== "" || 0 || "0") {
										properties.duration = Number(duration);
									}
									if (intensity !== "" || 0 || "0") {
										properties.intensity = Number(intensity);
									}
									editExercise({
										variables: {
											...properties,
											exerciseId: exercise.id
										}
									});
									history.goBack();
								}}
							>
								<InputGroup>
									<InputGroupText>Name</InputGroupText>
									<Input
										required
										type="text"
										value={name}
										onChange={e => setName(e.target.value)}
									/>
								</InputGroup>
								<InputGroup>
									<InputGroupText>Intervals</InputGroupText>
									<Input
										type="number"
										value={intervals}
										onChange={e => setIntervals(e.target.value)}
									/>
								</InputGroup>
								<InputGroup>
									<InputGroupText>Reps</InputGroupText>
									<Input
										type="number"
										value={reps}
										onChange={e => setReps(e.target.value)}
									/>
								</InputGroup>
								<InputGroup>
									<InputGroupText>Sets</InputGroupText>
									<Input
										type="number"
										value={sets}
										onChange={e => setSets(e.target.value)}
									/>
								</InputGroup>
								<InputGroup>
									<InputGroupText>Duration</InputGroupText>
									<Input
										type="number"
										value={duration}
										onChange={e => setDuration(e.target.value)}
									/>
								</InputGroup>
								<InputGroup>
									<InputGroupText>Intensity</InputGroupText>
									<Input
										type="number"
										value={intensity}
										onChange={e => setIntensity(e.target.value)}
									/>
								</InputGroup>
								<Button type="submit" color="success">
									{loading ? "Loading" : "Update"}
								</Button>
							</s.CreationForm>
						);
					}}
				</Mutation>
			</ModalBody>
		</Modal>
	);
};

export default EditScheduledWorkoutExerciseModal;
