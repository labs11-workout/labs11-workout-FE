import React, { useState } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import * as s from "./styles";
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	InputGroup,
	Input,
	InputGroupText
} from "reactstrap";

const addExercise = gql`
	mutation AddExercise(
		$sets: Int
		$reps: Int
		$intervals: Int
		$duration: Float
		$name: String!
		$workoutId: ID!
	) {
		addExercise(
			sets: $sets
			reps: $reps
			intervals: $intervals
			duration: $duration
			name: $name
			workoutId: $workoutId
		) {
			id
		}
	}
`;

const getSavedWorkout = gql`
	query GetSavedWorkout($id: ID!) {
		getSavedWorkout(id: $id) {
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

const CreateSavedWorkoutExercise = ({ workout, history }) => {
	const [name, setName] = useState("");
	const [intervals, setIntervals] = useState("");
	const [reps, setReps] = useState("");
	const [sets, setSets] = useState("");
	const [duration, setDuration] = useState("");
	const [intensity, setIntensity] = useState("");
	return (
		<Modal fade={false} centered isOpen={true} toggle={() => history.goBack()}>
			<ModalHeader>Create Exercise</ModalHeader>
			<ModalBody>
				<Mutation
					onCompleted={history.goBack}
					awaitRefetchQueries={true}
					mutation={addExercise}
					refetchQueries={() => [
						{ query: getSavedWorkout, variables: { id: workout.id } }
					]}
				>
					{(createExercise, { loading }) => {
						return (
							<s.CreationForm
								onSubmit={e => {
									e.preventDefault();
									let properties = {};
									if (name !== "") {
										properties.name = name;
									}
									if (intervals !== "" || 0) {
										properties.intervals = Number(intervals);
									} else {
										properties.intervals = null;
									}
									if (reps !== "" || 0) {
										properties.reps = Number(reps);
									} else {
										properties.reps = null;
									}
									if (sets !== "" || 0) {
										properties.sets = Number(sets);
									} else {
										properties.sets = null;
									}
									if (duration !== "" || 0) {
										properties.duration = Number(duration);
									} else {
										properties.duration = null;
									}
									if (intensity !== "" || 0) {
										properties.intensity = Number(intensity);
									} else {
										properties.intensity = null;
									}
									createExercise({
										variables: { ...properties, workoutId: workout.id }
									});
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
									{loading ? "Loading" : "Create"}
								</Button>
							</s.CreationForm>
						);
					}}
				</Mutation>
			</ModalBody>
		</Modal>
	);
};

export default CreateSavedWorkoutExercise;
