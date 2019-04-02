import React, { useState } from "react";
import * as s from "./styles";
import dateFns from "date-fns";
import classnames from "classnames";
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
	CardText,
	CardBody
} from "reactstrap";

const ScheduledSession = ({ schedule }) => {
	const [modalOpen, toggleModal] = useState(false);
	const [activeTab, toggleTab] = useState(0);
	return (
		<>
			<s.DaySchedule
				key={schedule.id}
				onClick={e => {
					e.stopPropagation();
					toggleModal(!modalOpen);
				}}
			>
				{schedule.workouts.length} Workout
				{schedule.workouts.length > 1 || schedule.workouts.length === 0
					? "s"
					: ""}{" "}
				@ {dateFns.format(schedule.time, "h:mma")}
			</s.DaySchedule>
			{/* Scheduled Session Modal Containing Information */}
			<Modal
				size="lg"
				centered
				isOpen={modalOpen}
				toggle={() => toggleModal(!modalOpen)}
			>
				<ModalHeader>
					{dateFns.format(schedule.time, "MMMM Do, h:mma")} -{" "}
					{schedule.workouts.length} Workout
					{schedule.workouts.length > 1 || schedule.workouts.length === 0
						? "s"
						: ""}
				</ModalHeader>
				<ModalBody>
					{schedule.workouts.length > 0 ? (
						<>
							<Nav tabs>
								{schedule.workouts.map((w, i) => {
									return (
										<NavItem key={w.id}>
											<NavLink
												className={classnames({
													active: activeTab === i
												})}
												onClick={() => toggleTab(i)}
											>
												{w.name}
											</NavLink>
										</NavItem>
									);
								})}
							</Nav>
							<TabContent activeTab={activeTab}>
								{schedule.workouts.map((w, i) => {
									return (
										<TabPane tabId={i} key={i}>
											<Card body>
												<CardHeader>Exercises</CardHeader>
												<CardBody>
													{w.exercises.length > 0 ? (
														<>
															{w.exercises.map(e => (
																<Card body>
																	<CardHeader>{e.name}</CardHeader>
																	<CardBody>
																		{e.intervals && (
																			<p>Intervals: {e.intervals}</p>
																		)}
																		{e.sets && <p>Sets: {e.sets}</p>}
																		{e.reps && <p>Reps: {e.reps}</p>}
																		{e.duration && (
																			<p>Duration: {e.duration}</p>
																		)}
																		{e.intensity && (
																			<p>Intensity: {e.intensity}</p>
																		)}
																	</CardBody>
																</Card>
															))}
														</>
													) : (
														<span>
															You don't have any exercises for this workout. Try
															adding one!
														</span>
													)}
												</CardBody>
											</Card>
										</TabPane>
									);
								})}
							</TabContent>
						</>
					) : (
						<span>You don't have any workouts. Try adding one!</span>
					)}
				</ModalBody>
				<ModalFooter>
					<s.CloseButton onClick={() => toggleModal(!modalOpen)}>
						<i className="fas fa-times" />
					</s.CloseButton>
				</ModalFooter>
			</Modal>
		</>
	);
};

export default ScheduledSession;
