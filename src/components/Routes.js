import React from "react";
import { Route } from "react-router-dom";
import Callback from "./callback.js";
import Home from "./views/Home";
import Landing from "./views/Landing";
import Login from "./Login";
import Logout from "./Logout";

const Routes = props => {
	return (
		<>
			<Route exact path="/" component={Landing} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/logout" component={Logout} />
			<Route path="/callback" component={Callback} />{" "}
			{/* Component that opens after login with Auth0, saves JWT to token in localStorage. */}
			<Route path="/home" component={Home} />
		</>
	);
};

export default Routes;
