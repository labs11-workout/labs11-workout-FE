import React, { Suspense, lazy } from "react";
import Loader from "react-loader-spinner";
import { Route, withRouter } from "react-router-dom";
import Callback from "./callback.js";
import Landing from "./views/Landing";
import Login from "./Login";
import Logout from "./Logout";
import Schedule from "./views/Schedule";
import Workouts from "./views/WorkoutsView";
import Payment from "./views/Payment/payment.js";

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
			<Route exact path="/payment" component={Payment}></Route>
		</>
	);
};

export default withRouter(Routes);
