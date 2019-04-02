import React, { useState } from "react";
import dateFns from "date-fns";
import * as s from "./styles";
import ScheduledSession from "../ScheduledSession";
import CalendarDay from "../CalendarDay";
import MobileDayCell from "./MobileDayCell";

const MobileCalendar = ({ schedules }) => {
	const [currentWeek, setWeek] = useState(new Date());
	const [selectedDate, selectDate] = useState(new Date());

	const renderHeader = () => {
		const dateFormat = "MMM Do YYYY";
		return (
			<s.Header>
				<s.Previous onClick={prevWeek}>{`<`}</s.Previous>
				{/* <h2>{dateFns.format(currentWeek, dateFormat)}</h2> */}
				<h3>
					{dateFns.format(dateFns.startOfWeek(currentWeek), dateFormat)} -{" "}
					{dateFns.format(dateFns.endOfWeek(currentWeek), dateFormat)}
				</h3>
				<s.Next onClick={nextWeek}>{`>`}</s.Next>
			</s.Header>
		);
	};

	const renderDays = () => {
		const dateFormat = "dddd, MMMM Do";
		const days = [];

		let startdate = dateFns.startOfWeek(currentWeek);

		for (let i = 0; i < 7; i++) {
			let currentDay = dateFns.addDays(startdate, i);
			let todaySchedule = schedules.filter(s =>
				dateFns.isSameDay(currentDay, s.time)
			);
			days.push(
				<MobileDayCell
					key={currentDay}
					day={currentDay}
					schedules={todaySchedule}
					selectedDate={selectedDate}
					selectDate={selectDate}
				/>
			);
		}

		return days;
	};

	const nextWeek = () => {
		setWeek(dateFns.addWeeks(currentWeek, 1));
	};

	const prevWeek = () => {
		setWeek(dateFns.subWeeks(currentWeek, 1));
	};

	return (
		<s.Container>
			{renderHeader()}
			{renderDays()}
		</s.Container>
	);
};

export default MobileCalendar;
