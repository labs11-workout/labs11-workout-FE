import React from "react";
import * as s from "./styles";
import dateFns from "date-fns";

const ScheduledSession = ({ schedule }) => {
	return (
		<s.DaySchedule key={schedule.id}>
			{schedule.workouts.length} Workout
			{schedule.workouts.length > 1 || schedule.workouts.length === 0
				? "s"
				: ""}{" "}
			@ {dateFns.format(schedule.time, "h:mma")}
		</s.DaySchedule>
	);
};

export default ScheduledSession;
