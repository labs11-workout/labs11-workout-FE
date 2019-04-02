import React, { useState } from "react";
import dateFns from "date-fns";
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
	select
}) => {
	const [toggled, toggleModal] = useState(false);
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
				toggleModal(!toggled);
			}}
		>
			<span className="number">{formattedDate}</span>
			<span className="content">
				<CalendarDay
					day={day}
					schedules={schedules}
					externalToggled={toggled}
					externalToggle={() => toggleModal(!toggled)}
				/>
				{/* {this.props.schedules
                    .filter(s => dateFns.isSameDay(day, s.time))
                    .map(d => {
                        // return <ScheduledSession key={d.id} schedule={d} />;
                    })} */}
			</span>
			<span className="bg">{formattedDate}</span>
		</div>
	);
};

export default DayCell;
