import React, { useEffect } from "react";
import { Route, withRouter } from "react-router-dom";
import Callback from "./callback.js";
import Login from "./Login";
import Logout from "./Logout";
import Schedule from "./views/Schedule";
import Settings from "./views/Payment/settings";
import Workouts from "./views/Workouts";
import Progress from "./views/Progress";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Routes = props => {
	const validPaths = [
		"login",
		"logout",
		"schedule",
		"callback",
		"workouts",
		"settings",
		"progress"
	];
	useEffect(() => {
		if (!validPaths.find(e => e === props.location.pathname.split("/")[1])) {
			props.history.push("/schedule");
		}
	}, [props.location.pathname]);
	return (
		<>
			{props.location.pathname === "/" ? (
				<div style={{ paddingBottom: "62px" }}>
					<Route exact path="/login" component={Login} />
					<Route exact path="/logout" component={Logout} />
					<Route path="/schedule" component={Schedule} />
					<Route path="/callback" component={Callback} />
					<Route path="/workouts" component={Workouts} />
					<Route path="/settings" component={Settings} />
					<Route path="/progress" component={Progress} />
				</div>
			) : (
				<>
					<Navigation />
					<div style={{ paddingBottom: "62px" }}>
						<Route exact path="/login" component={Login} />
						<Route exact path="/logout" component={Logout} />
						<Route path="/schedule" component={Schedule} />
						<Route path="/callback" component={Callback} />
						<Route path="/workouts" component={Workouts} />
						<Route path="/settings" component={Settings} />
						<Route path="/progress" component={Progress} />
					</div>
					<Footer />
				</>
			)}
		</>
	);
};

export default withRouter(Routes);
