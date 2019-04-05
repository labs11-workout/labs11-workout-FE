import React from "react";
import * as s from "./styles";
import SavedWorkout from "./SavedWorkout/";

const SavedWorkouts = ({ savedWorkouts }) => {
	return (
		<div>
			<h2>Saved Workouts</h2>
			<hr />
			<s.WorkoutList>
				{savedWorkouts.map(s => {
					return <SavedWorkout key={s.id} workout={s} />;
				})}
			</s.WorkoutList>
		</div>
	);
};

export default SavedWorkouts;
