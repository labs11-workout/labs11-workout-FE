import React, { useEffect } from "react";
import * as s from "./styles";
import { withRouter } from "react-router-dom";
import { withTheme } from "styled-components";
import landingImg from "./assets/landingImg.svg";

const Landing = props => {
	useEffect(() => {
		if (localStorage.getItem("token")) {
			props.history.push("/schedule");
		}
	}, []);

	return (
		<div>
			<s.Container>
				<img src={landingImg} alt="Lady Running With Phone" />
				<div class="jumbotron">
					<p>
						CleanLift is a workout tracking platform to help keep you motivated
						and on schedule. The platform allows you to schedule workout
						sessions, add workouts to your scheduled dates, and while you're in
						the gym you can even keep track of what you have completed. It
						doesn't end after the workout though, we allow you to record Body
						Metrics and keep track of your progress over time. To start your
						path to greater health use CleanLift.
					</p>
				</div>
			</s.Container>
			{/* <Link to="/login">Let's Get Started</Link> */}
			<s.Btn onClick={() => props.history.push("/login")}>
				Let's Get Started
			</s.Btn>
		</div>
	);
};

export default withRouter(withTheme(Landing));
