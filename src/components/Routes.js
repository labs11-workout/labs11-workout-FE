    
import React from "react";
import { Route, withRouter } from "react-router-dom";
import Callback from "./callback.js";
import Landing from "./views/Landing";
import Login from "./Login";
import Logout from "./Logout";
import Schedule from "./views/Schedule";
import Settings from "./views/Payment/settings";
import Workouts from "./views/Workouts";
import Progress from "./views/Progress";

const Routes = props => {
	return (
		<>
			<Route exact path="/" component={Landing} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/logout" component={Logout} />
			<Route path="/schedule" component={Schedule} />
			<Route path="/callback" component={Callback} />
			<Route exact path="/workouts" component={Workouts} />
			<Route path="/settings" component={Settings} />
			<Route exact path="/progress" component={Progress} />
		</>
	);
};

const ContentContainer = styled.div`
	width: 100%;
	max-width: 1280px;
	margin: 12px auto;
`;
export default withRouter(Routes);
