import React, { useEffect } from "react";
import * as s from "./styles";
import Protected from "../../Protected";
import { Query } from "react-apollo";
import { Route, withRouter } from "react-router-dom";
import gql from "graphql-tag";
import Loading from "../../Loading";
import SavedWorkouts from "./SavedWorkouts/";
import ScheduledWorkouts from "./ScheduledWorkouts/";
import workoutImg from "./assets/workoutImg.svg";

const getSavedWorkoutsAndSchedules = gql`
	{
		getSavedWorkouts {
			id
			name
			createdAt
			exercises {
				id
				name
				intervals
				reps
				sets
				duration
				intensity
			}
		}
		getWorkouts {
			id
			name
			createdAt
			schedule {
				id
				time
			}
			exercises {
				id
				name
				intervals
				reps
				sets
				duration
				intensity
			}
		}
	}
`;

const Workouts = ({ match, history, location }) => {
	useEffect(() => {
		if (location.pathname === "/workouts") {
			history.push("/workouts/saved");
		}
	}, []);

	return (
		<s.Container>
			<Query query={getSavedWorkoutsAndSchedules}>
				{({ loading, error, data }) => {
					if (loading) return <Loading />;
					if (error) return <p>{error.message}</p>;
					return (
						<>
							<s.Menu>
								<h3>Menu</h3>
								<hr />
								<s.MenuLink activeClassName="active" to="/workouts/saved">
									Workout Templates
								</s.MenuLink>
								<s.MenuLink activeClassName="active" to="/workouts/scheduled">
									Scheduled Workouts
								</s.MenuLink>
							</s.Menu>
							<s.Content>
								<img src={workoutImg} alt="woman doing situps" />
								<Route
									path="/workouts/saved"
									render={() => (
										<SavedWorkouts
											history={history}
											savedWorkouts={data.getSavedWorkouts}
										/>
									)}
								/>
								<Route
									path="/workouts/scheduled"
									render={() => (
										<ScheduledWorkouts workouts={data.getWorkouts} />
									)}
								/>
							</s.Content>
						</>
					);
				}}
			</Query>
		</s.Container>
	);
};

export default Protected(withRouter(Workouts));
