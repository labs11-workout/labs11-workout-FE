import React, { useState } from "react";
import * as s from "./styles";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	TabContent,
	TabPane,
	Nav,
	NavItem,
	NavLink,
	Card,
	CardHeader,
	CardBody,
	InputGroup,
	Input,
	InputGroupText,
	Collapse,
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from "reactstrap";

const deleteExercise = gql`
	mutation DeleteExercise($exerciseId: ID!) {
		deleteExercise(exerciseId: $exerciseId) {
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

const EditSavedWorkoutExercise = ({
	exercise,
	index,
	activeCollapse,
	setActiveCollapse,
	history,
	workout
}) => {
	const e = exercise;
	const i = index;
	const [settings, toggleSettings] = useState(false);
	const [deleteModalOpen, toggleDeleteModal] = useState(false);
	return (
		<>
			<s.NestedCard key={i} body>
				<s.CardHead
					onClick={
						activeCollapse === i
							? () => setActiveCollapse("")
							: () => setActiveCollapse(i)
					}
					className={`${activeCollapse === i && "active"}`}
				>
					<span>
						{activeCollapse === i ? (
							<i className="fas fa-sort-up" />
						) : (
							<i className="fas fa-sort-down" />
						)}{" "}
						{e.name}
					</span>
					<Dropdown
						isOpen={settings}
						onClick={e => e.stopPropagation()}
						toggle={() => toggleSettings(!settings)}
					>
						<s.SettingButton className="exercise" color="link">
							<i className="fas fa-cog" />
						</s.SettingButton>
						<DropdownMenu>
							<DropdownItem
								onClick={() => history.push(`/workouts/saved/${workout.id}`)}
							>
								Edit
							</DropdownItem>
							<s.DropdownItemDanger
								onClick={() => toggleDeleteModal(!deleteModalOpen)}
								color="danger"
							>
								Delete
							</s.DropdownItemDanger>
						</DropdownMenu>
					</Dropdown>
				</s.CardHead>
				<Collapse isOpen={activeCollapse === i}>
					<s.CardMain>
						{e.intervals && <span>Intervals: {e.intervals}</span>}
						{e.sets && <span>Sets: {e.sets}</span>}
						{e.reps && <span>Reps: {e.reps}</span>}
						{e.duration && <span>Duration: {e.duration}</span>}
						{e.intensity && <span>Intensity: {e.intensity}</span>}
					</s.CardMain>
				</Collapse>
			</s.NestedCard>

			<Modal
				fade={false}
				centered
				isOpen={deleteModalOpen}
				toggle={() => toggleDeleteModal(!deleteModalOpen)}
			>
				<h5 style={{ margin: "16px", textAlign: "Center" }}>
					Are you sure you want to delete this?
				</h5>
				<Mutation
					mutation={deleteExercise}
					refetchQueries={() => [
						{ query: getSavedWorkout, variables: { id: workout.id } }
					]}
				>
					{(deleteExercise, { loading }) => {
						return (
							<s.DeleteButton
								onClick={() =>
									deleteExercise({ variables: { exerciseId: e.id } })
								}
								color="danger"
							>
								{loading ? "Loading" : "Delete"}
							</s.DeleteButton>
						);
					}}
				</Mutation>
				<s.DeleteButton
					color="success"
					onClick={() => toggleDeleteModal(!deleteModalOpen)}
				>
					Cancel
				</s.DeleteButton>
			</Modal>
		</>
	);
};

export default EditSavedWorkoutExercise;