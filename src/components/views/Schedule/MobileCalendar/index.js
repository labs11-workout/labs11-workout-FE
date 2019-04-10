import React, { useState } from "react";
import dateFns from "date-fns";
import * as s from "./styles";
import MobileDayCell from "./MobileDayCell";
import { withRouter } from "react-router-dom";

const MobileCalendar = ({ schedules, match, history }) => {
	const [selectedDate, selectDate] = useState(
		dateFns.format(
			new Date(
				match.params.monthDayYear.split("-")[2],
				match.params.monthDayYear.split("-")[0] - 1,
				match.params.monthDayYear.split("-")[1] - 1
			),
			"MM-DD-YYYY"
		)
	);

	const renderHeader = () => {
		const dateFormat = "MMM Do";
		return (
			<s.Header>
				<s.Previous onClick={prevWeek}>{`<`}</s.Previous>
				<h3>
					{dateFns.format(
						dateFns.startOfWeek(
							new Date(
								match.params.monthDayYear.split("-")[2],
								match.params.monthDayYear.split("-")[0] - 1,
								match.params.monthDayYear.split("-")[1]
							)
						),
						dateFormat
					)}{" "}
					-{" "}
					{dateFns.format(
						dateFns.endOfWeek(
							new Date(
								match.params.monthDayYear.split("-")[2],
								match.params.monthDayYear.split("-")[0] - 1,
								match.params.monthDayYear.split("-")[1]
							)
						),
						dateFormat
					)}
				</h3>
				<s.Next onClick={nextWeek}>{`>`}</s.Next>
			</s.Header>
		);
	};

	const renderDays = () => {
		const days = [];

		let startdate = dateFns.startOfWeek(
			new Date(
				match.params.monthDayYear.split("-")[2],
				match.params.monthDayYear.split("-")[0] - 1,
				match.params.monthDayYear.split("-")[1]
			)
		);

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
		const newDate = dateFns.format(
			dateFns.addWeeks(
				new Date(
					match.params.monthDayYear.split("-")[2],
					match.params.monthDayYear.split("-")[0] - 1,
					match.params.monthDayYear.split("-")[1] - 1
				),
				1
			),
			"MM-DD-YYYY"
		);
		history.push(`/schedule/${newDate}`);
		// setWeek(dateFns.addWeeks(currentWeek, 1));
	};

	const prevWeek = () => {
		const newDate = dateFns.format(
			dateFns.subWeeks(
				new Date(
					match.params.monthDayYear.split("-")[2],
					match.params.monthDayYear.split("-")[0] - 1,
					match.params.monthDayYear.split("-")[1] - 1
				),
				1
			),
			"MM-DD-YYYY"
		);
		history.push(`/schedule/${newDate}`);
		// setWeek(dateFns.subWeeks(currentWeek, 1));
	};

	return (
		<s.Container>
			{renderHeader()}
			{renderDays()}
		</s.Container>
	);
};

export default withRouter(MobileCalendar);
