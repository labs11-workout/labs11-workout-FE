import React from "react";
import { Route, withRouter } from "react-router-dom";
import Callback from "./callback.js";
import Landing from "./views/Landing";
import Login from "./Login";
import Logout from "./Logout";
import Schedule from "./views/Schedule";
import Workouts from "./views/WorkoutsView";

const Routes = props => {
	return (
		<>
			<Route exact path="/" component={Landing} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/logout" component={Logout} />
			<Route exact path="/schedule" component={Schedule} />
			<Route path="/callback" component={Callback} />{" "}
			{/* Component that opens after login with Auth0, saves JWT to token in localStorage. */}
			<Route exact path="/workouts" component={Workouts} />
		</>
	);
};

export default withRouter(Routes);