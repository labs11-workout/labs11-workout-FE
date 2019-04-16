import React, { useState } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { numberOnlyInput } from "../../../../../utils/numberInputValidation";
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

const editExercise = gql`
	mutation EditExercise(
		$sets: Int
		$reps: Int
		$intervals: Int
		$intensity: Int
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
			intensity: $intensity
			exerciseId: $exerciseId
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

const EditSavedWorkoutExerciseModal = ({
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
			toggle={() => history.push(`/workouts/saved/${workout.id}`)}
		>
			<ModalHeader>Update Exercise</ModalHeader>
			<ModalBody>
				<Mutation
					awaitRefetchQueries={true}
					mutation={editExercise}
					refetchQueries={() => [
						{ query: getSavedWorkout, variables: { id: workout.id } }
					]}
				>
					{(editExercise, { loading, data }) => {
						if (data && data.editExercise) {
							history.goBack();
						}
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
								}}
							>
								<InputGroup>
									<InputGroupText>Workout Name</InputGroupText>
									<Input
										required
										type="text"
										value={name}
										onChange={e => setName(e.target.value)}
										placeholder="Workout name"
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
									{loading ? "Loading" : "Update"}
								</s.SecondaryButton>
							</s.CreationForm>
						);
					}}
				</Mutation>
			</ModalBody>
		</Modal>
	);
};

export default EditSavedWorkoutExerciseModal;
