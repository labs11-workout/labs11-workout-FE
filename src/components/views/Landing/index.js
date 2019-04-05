import React from "react";
import * as s from "./styles";

const Landing = props => {
	return <s.Container>
		<p>CleanLift is a workout tracking platform to help keep you motivated and on schedule. The platform allows you to schedule workout sessions, add workouts to your scheduled dates, and while you're in the gym you can even keep track of what you have completed. It doesn't end after the workout though, we allow you to record Body Metrics and keep track of your progress over time. To start your path to greater health use CleanLift."</p>
		<a href="/login"><button>Get Started</button></a>
	</s.Container>;
};

export default Landing;
