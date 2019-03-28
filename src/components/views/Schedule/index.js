import React from "react";
import * as s from "./styles";
import Protected from "../../Protected";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Calendar from "./Calendar";
import "./Calendar.css";

const getSchedules = gql`
	{
		getSchedules {
			id
			time
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
					Schedule Page
					<header>
						<div id="logo">
							<span className="icon">date_range</span>
							<span>
								Workout <b>calendar</b>
							</span>
						</div>
					</header>
					<main>
						<Calendar />
					</main>
					<Query query={getSchedules}>
						{({ loading, error, data }) => {
							if (loading) return <p> loading </p>;
							if (error) return <p> error </p>;
							console.log(data);
							return <p> loaded schedules(Check console) </p>;
						}}
					</Query>
				</div>
			</s.Container>
		</>
	);
};

export default Protected(Schedule);
