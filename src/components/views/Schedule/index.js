import React, { useState, useEffect } from "react";
import * as s from "./styles";
import { Route, withRouter, Redirect } from "react-router-dom";
import dateFns from "date-fns";
import Protected from "../../Protected";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Calendar from "./Calendar/";
import MobileCalendar from "./MobileCalendar/";
import CalendarDay from "./CalendarDay";
import ScheduledSession from "./ScheduledSession";

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
			window.removeEventListener("resize", window);
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
										<Route
											path={`/schedule/:monthDayYear`}
											render={() => {
												if (clientWidth > 601) {
													return <Calendar schedules={data.getSchedules} />;
												} else {
													return (
														<MobileCalendar schedules={data.getSchedules} />
													);
												}
											}}
										/>
									</>
								);
							}}
						</Query>
					</main>
				</div>
			</s.Container>
		</>
	);
};

export default Protected(withRouter(Schedule));
