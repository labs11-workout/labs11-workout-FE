import React, { useState } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { numberOnlyInput } from "../../../../../utils/numberInputValidation";
import * as s from "./styles";
import {
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
		$intensity: Int
	) {
		addExercise(
			sets: $sets
			reps: $reps
			intervals: $intervals
			duration: $duration
			name: $name
			workoutId: $workoutId
			intensity: $intensity
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
									<InputGroupText>Exercise Name</InputGroupText>
									<Input
										required
										type="text"
										value={name}
										onChange={e => setName(e.target.value)}
										placeholder="Exercise name"
									/>
								</InputGroup>
								<InputGroup>
									<InputGroupText>Intervals</InputGroupText>
									<Input
										onKeyDown={numberOnlyInput}
										value={intervals}
										onChange={e => setIntervals(e.target.value)}
										placeholder="How many Intervals"
									/>
								</InputGroup>
								<InputGroup>
									<InputGroupText>Reps</InputGroupText>
									<Input
										onKeyDown={numberOnlyInput}
										value={reps}
										onChange={e => setReps(e.target.value)}
										placeholder="How many Reps"
									/>
								</InputGroup>
								<InputGroup>
									<InputGroupText>Sets</InputGroupText>
									<Input
										onKeyDown={numberOnlyInput}
										value={sets}
										onChange={e => setSets(e.target.value)}
										placeholder="How many Sets"
									/>
								</InputGroup>
								<InputGroup>
									<InputGroupText>Duration</InputGroupText>
									<Input
										onKeyDown={numberOnlyInput}
										value={duration}
										onChange={e => setDuration(e.target.value)}
										placeholder="Duration of Exercise"
									/>
								</InputGroup>
								<InputGroup>
									<InputGroupText>Intensity</InputGroupText>
									<Input
										onKeyDown={numberOnlyInput}
										value={intensity}
										onChange={e => setIntensity(e.target.value)}
										placeholder="Weight of Lift, Speed of run"
									/>
								</InputGroup>
								<s.SecondaryButton type="submit">
									{loading ? "Loading" : "Create"}
								</s.SecondaryButton>
							</s.CreationForm>
						);
					}}
				</Mutation>
			</ModalBody>
		</Modal>
	);
};

export default CreateSavedWorkoutExercise;
