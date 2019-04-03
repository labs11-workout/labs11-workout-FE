import React, { useState } from "react";
import dateFns from "date-fns";
import { withRouter } from "react-router-dom";
import CalendarDay from "../CalendarDay";
import * as s from "./styles";
// The purpose of MobileDayCell is to provide the whole day's cell on the Mobile Calendar, but to also make it a click listener to toggle the CalendarDay modal, while keeping the CalendarDay's modal in it's own component.
// We do this by providing optional modal toggle state and toggle function props called externalToggle and externalToggled to the CalendarDay component.
//If the externalToggle and externalToggled props are not provided, then the CalendarDay component's container will serve as the Modal toggle click listener.

const MobileDayCell = ({
	day,
	schedules,
	selectDate,
	selectedDate,
	history,
	match
}) => {
	const dateFormat = "dddd, MMMM Do";
	const monthDayYear = dateFns.format(day, "MM-DD-YYYY");
	const [toggled, toggleModal] = useState(false);

	return (
		<s.Day
			onClick={() => {
				selectDate(day);
				history.push(`/schedule/${monthDayYear}/${dateFns.format(day, "D")}`);
			}}
		>
			<s.DayHeader
				className={`DayHeader ${dateFns.isSameDay(day, selectedDate) &&
					"selected"}`}
			>
				<s.TodayLabel>
					{dateFns.isSameDay(day, new Date()) && "Today"}
				</s.TodayLabel>
				{dateFns.format(day, dateFormat)}
			</s.DayHeader>
			<s.DayCell>
				<CalendarDay
					day={day}
					schedules={schedules}
					externalToggled={toggled}
					externalToggle={() => toggleModal(!toggled)}
				/>
			</s.DayCell>
		</s.Day>
	);
};

export default withRouter(MobileDayCell);
