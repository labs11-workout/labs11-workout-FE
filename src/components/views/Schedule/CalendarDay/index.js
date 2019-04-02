import React, { useState } from "react";
import dateFns from "date-fns";
import * as s from "./styles";
import ScheduledSession from "../ScheduledSession";

import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
//If the externalToggle and externalToggled props are not provided, then the CalendarDay component's container (<s.Container> element) will serve as the Modal toggle click listener.
// externalToggle and externalToggled are used if a component outside of this one is meant to control the modal. Values passed via props.
const CalendarDay = ({ day, schedules, externalToggle, externalToggled }) => {
	const [modalOpen, toggleModal] = useState(false);

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
