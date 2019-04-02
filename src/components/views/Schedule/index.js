import React from "react";
import * as s from "./styles";
import Protected from "../../Protected";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Calendar from "./Calendar/";
import MobileCalendar from "./MobileCalendar/";

const getSchedules = gql`
	{
		getSchedules {
			id
			time
			workouts {
				id
				name
				completed
				exercises {
					name
					reps
					sets
					duration
					intensity
				}
			}
		}
	}
`;

const userLogin = gql`
	{
		userLogin {
			id
			authId
		}
	}
`;

// calendar => pick day and time => click create schedule => then can freely add workout. most importnat is to add a dynamic calendar, with mobile view of 7 days

//TODO add a schedule, mutation called addSchedule

const Schedule = props => {
	return (
		// This query is required don't remove it. It creates a user on our backend if one is not already created.
		<>
			<Query query={userLogin}>
				{({ loading, error, data }) => {
					if (loading) return "";
					if (error) {
						console.log(error);
						return "";
					}
					console.log("Successful Login.");
					return "";
				}}
			</Query>
			{/* This above query is required don't remove it. It creates a user on our
			backend if one is not already created. */}
			<s.Container>
				<div className="Calendar">
					<header>
						<div id="logo">
							<span className="icon">date_range</span>
							<span>
								Workout <b>calendar</b>
							</span>
						</div>
					</header>
					<main>
						<Query query={getSchedules}>
							{({ loading, error, data }) => {
								if (loading) return <p> loading </p>;
								if (error) return <p> error </p>;
								return (
									<>
										<Calendar schedules={data.getSchedules} />
										<MobileCalendar schedules={data.getSchedules} />
									</>
								);
								// if (window.innerWidth > 600) {
								// 	return <Calendar schedules={data.getSchedules} />;
								// } else {
								// 	return <MobileCalendar schedules={data.getSchedules} />;
								// }
							}}
						</Query>
					</main>
				</div>
			</s.Container>
		</>
	);
};

export default Protected(Schedule);
