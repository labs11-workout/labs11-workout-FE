import React, { useState, useEffect } from "react";
import * as s from "./styles";
import { Route, withRouter, Redirect } from "react-router-dom";
import dateFns from "date-fns";
import Protected from "../../Protected";
import { Query } from "react-apollo";
import Loading from "../../Loading";
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

const userLogin = gql`
	{
		userLogin {
			id
			authId
			premium
			savedWorkouts {
				id
			}
			schedules {
				id
			}
			createdAt
		}
	}
`;

// calendar => pick day and time => click create schedule => then can freely add workout. most importnat is to add a dynamic calendar, with mobile view of 7 days

//TODO add a schedule, mutation called addSchedule

const Schedule = props => {
	const [clientWidth, setClientWidth] = useState(window.innerWidth);
	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	});

	const handleResize = e => {
		if (clientWidth > 601 && e.currentTarget.innerWidth < 601) {
			setClientWidth(e.currentTarget.innerWidth);
		} else if (clientWidth < 601 && e.currentTarget.innerWidth > 601) {
			setClientWidth(e.currentTarget.innerWidth);
		}
	};
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
					return "";
				}}
			</Query>
			{/* This above query is required don't remove it. It creates a user on our
			backend if one is not already created. The user is redirected to this view after logging in. */}
			{/* If the user has not specified a date in the URL. Redirect them to the calendar based off the current date. */}
			{props.location.pathname === "/schedule" && (
				<Redirect
					to={`/schedule/${dateFns.format(new Date(), "MM-DD-YYYY")}`}
				/>
			)}
			<s.Container>
				<div className="Calendar">
					<Query query={getSchedules}>
						{({ loading, error, data }) => {
							if (loading) return <Loading />;
							if (error) return <p> error </p>;
							return (
								<>
									<Route
										path={`/schedule/:monthDayYear`}
										render={() => {
											if (clientWidth > 601) {
												return <Calendar schedules={data.getSchedules} />;
											} else {
												return <MobileCalendar schedules={data.getSchedules} />;
											}
										}}
									/>
								</>
							);
						}}
					</Query>
				</div>
			</s.Container>
		</>
	);
};

export default Protected(withRouter(Schedule));
