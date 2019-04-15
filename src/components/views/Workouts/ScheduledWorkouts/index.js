import React from "react";
import { withRouter, Route } from "react-router-dom";
import CreateScheduledWorkoutModal from "./CreateScheduledWorkoutModal";
import ScheduledWorkout from "./ScheduledWorkout";
import * as s from "./styles";

const ScheduledWorkouts = ({ workouts, match, history, location }) => {
	return (
		<>
			<div>
				<h2>Scheduled Workouts</h2>
				<hr />
				<s.CreateButton
					color="primary"
					onClick={() => history.push("/workouts/scheduled/create")}
				>
					Create Workout
				</s.CreateButton>
				<s.WorkoutList>
					{workouts.map(s => {
						return <ScheduledWorkout key={s.id} workout={s} />;
					})}
				</s.WorkoutList>
			</div>
			<Route
				path="/workouts/scheduled/create"
				render={() => (
					<CreateScheduledWorkoutModal history={history} location={location} />
				)}
			/>
			<Route
				path="/workouts/scheduled/create/:scheduleId"
				render={() => (
					<CreateScheduledWorkoutModal
						history={history}
						location={location}
						preset={true}
					/>
				)}
			/>
		</>
	);
};

export default withRouter(ScheduledWorkouts);
