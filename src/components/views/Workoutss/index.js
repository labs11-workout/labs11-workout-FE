import React, { useEffect } from "react";
import * as s from "./styles";
import Protected from "../../Protected";
import { Query, Mutation } from "react-apollo";
import { Route, withRouter } from "react-router-dom";
import gql from "graphql-tag";
import SavedWorkouts from "./SavedWorkouts/";
import ScheduledWorkouts from "./ScheduledWorkouts/";

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
		getSchedules {
			id
			time
			workouts {
				id
				name
				completed
				exercises {
					id
					name
					reps
					sets
					duration
					intensity
					completed
				}
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
					if (loading) return <p>Loading...</p>;
					if (error) return <p>{error.message}</p>;
					return (
						<>
							<s.Menu>
								<h3>Menu</h3>
								<hr />
								<s.MenuLink activeClassName="active" to="/workouts/saved">
									Saved Workouts
								</s.MenuLink>
								<s.MenuLink activeClassName="active" to="/workouts/scheduled">
									Scheduled Workouts
								</s.MenuLink>
							</s.Menu>
							<s.Content>
								<Route
									path="/workouts/saved"
									render={() => (
										<SavedWorkouts savedWorkouts={data.getSavedWorkouts} />
									)}
								/>
								<Route
									path="/workouts/scheduled"
									render={() => (
										<ScheduledWorkouts schedules={data.getSchedules} />
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