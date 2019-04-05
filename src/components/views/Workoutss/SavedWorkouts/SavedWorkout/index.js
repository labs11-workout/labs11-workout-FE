import React, { useState } from "react";
import * as s from "./styles";
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
	Collapse
} from "reactstrap";

const SavedWorkout = ({ workout }) => {
	const [activeCollapse, setActiveCollapse] = useState("");
	return (
		<s.WorkoutCard>
			<CardHeader>
				<h4>{workout.name}</h4>
			</CardHeader>
			<CardBody>
				<h5 style={{ textAlign: "left" }}>Exercises</h5>
				<hr />
				{workout.exercises.map((e, i) => {
					return (
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
					);
				})}
			</CardBody>
		</s.WorkoutCard>
	);
};

export default SavedWorkout;
