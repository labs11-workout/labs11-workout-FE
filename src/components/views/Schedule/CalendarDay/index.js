import React, { useState } from "react";
import dateFns from "date-fns";
import * as s from "./styles";
import ScheduledSession from "../ScheduledSession";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

import {
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	InputGroup,
	Input,
	InputGroupText,
	Button,
	Alert
} from "reactstrap";

const addSchedule = gql`
	mutation AddSchedule($time: String!) {
		addSchedule(time: $time) {
			id
			time
			workouts {
				id
				name
				exercises {
					name
					sets
					reps
					duration
					intensity
					intervals
				}
			}
		}
	}
`;

const getSchedules = gql`
	{
		getSchedules {
			id
			time
			workouts {
				id
				name
				completed
				exercises {
					name
					reps
					sets
					duration
					intensity
				}
			}
		}
	}
`;

//If the externalToggle and externalToggled props are not provided, then the CalendarDay component's container (<s.Container> element) will serve as the Modal toggle click listener.
// externalToggle and externalToggled are used if a component outside of this one is meant to control the modal. Values passed via props.
const CalendarDay = ({ day, schedules, externalToggle, externalToggled }) => {
	const [modalOpen, toggleModal] = useState(false);
	const [timeInput, setTimeInput] = useState("12:00");

	//This is used to take the time from our time input, assign it to the day that was clicked on, then format it so our backend can read it.
	const createDate = time => {
		const newDay = new Date(day);
		const hourMinutes = timeInput.split(":");
		const hours = hourMinutes[0];
		const minutes = hourMinutes[1];
		newDay.setHours(hours);
		newDay.setMinutes(minutes);
		const formattedDate = dateFns.format(newDay, "YYYY-MM-DDTHH:mm:ss.SSSZ");
		return formattedDate;
	};

	return (
		<s.Container
			onClick={externalToggle ? externalToggle : () => toggleModal(!modalOpen)}
		>
			{schedules.length > 0 &&
				schedules.map(d => {
					return <ScheduledSession key={d.id} schedule={d} />;
				})}

			<Modal
				size="lg"
				centered
				isOpen={externalToggle ? externalToggled : modalOpen}
				toggle={externalToggle ? externalToggle : () => toggleModal(!modalOpen)}
			>
				<ModalHeader>
					{dateFns.format(day, "dddd, MMMM Do")} - {schedules.length} Session
					{schedules.length > 1 || schedules.length === 0 ? "s" : ""}
				</ModalHeader>
				<ModalBody>
					<s.AddSchedule>
						<InputGroup>
							<InputGroupText>Time</InputGroupText>
							<Input
								value={timeInput}
								onChange={e => {
									setTimeInput(e.target.value);
								}}
								type="time"
							/>
						</InputGroup>
						<Mutation
							mutation={addSchedule}
							refetchQueries={() => [{ query: getSchedules }]}
						>
							{(addSchedule, { loading, error, data }) => {
								return (
									<>
										<Button
											color="primary"
											onClick={() =>
												addSchedule({
													variables: {
														time: createDate(timeInput)
													}
												})
											}
										>
											{loading ? "Loading..." : "Add Schedule"}
										</Button>
										{error && (
											<Alert color="danger">
												There was an error. Please try again.
											</Alert>
										)}
									</>
								);
							}}
						</Mutation>
					</s.AddSchedule>
					{schedules.length > 0 ? (
						schedules.map(d => {
							return <ScheduledSession key={d.id} schedule={d} />;
						})
					) : (
						<span>You don't have any Scheduled Sessions. Try adding one!</span>
					)}
				</ModalBody>
				<ModalFooter>
					<s.CloseButton
						onClick={
							externalToggle ? externalToggle : () => toggleModal(!modalOpen)
						}
					>
						<i className="fas fa-times" />
					</s.CloseButton>
				</ModalFooter>
			</Modal>
		</s.Container>
	);
};

export default CalendarDay;
