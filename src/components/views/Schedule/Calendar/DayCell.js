import React, { useState } from "react";
import dateFns from "date-fns";
import { withRouter } from "react-router-dom";
import CalendarDay from "../CalendarDay";

// The purpose of DayCell is to provide the whole day's cell, but to also make it a click listener to toggle the CalendarDay modal, while keeping the CalendarDay's modal in it's own component.
// We do this by providing optional modal toggle state and toggle function props called externalToggle and externalToggled to the CalendarDay component.
//If the externalToggle and externalToggled props are not provided, then the CalendarDay component's container will serve as the Modal toggle click listener.

const DayCell = ({
	day,
	schedules,
	monthStart,
	selectedDate,
	cloneDay,
	formattedDate,
	select,
	match,
	history
}) => {
	const [toggled, toggleModal] = useState(false);
	const monthDayYear = dateFns.format(day, "MM-DD-YYYY");
	return (
		<div
			className={`col cell ${
				!dateFns.isSameMonth(day, monthStart)
					? "disabled"
					: dateFns.isSameDay(day, selectedDate)
					? "selected"
					: ""
			}`}
			key={day}
			onClick={() => {
				select(dateFns.parse(cloneDay));
				history.push(`/schedule/${monthDayYear}/${dateFns.format(day, "D")}`);
			}}
		>
			<span className="light-text">
				{dateFns.isSameDay(day, new Date()) && "Today"}
			</span>
			<span className="number">{formattedDate}</span>
			<span className="content">
				<CalendarDay day={day} schedules={schedules} />
			</span>
			<span className="bg">{formattedDate}</span>
		</div>
	);
};

export default withRouter(DayCell);
