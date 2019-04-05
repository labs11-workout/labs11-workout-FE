import React from "react";
import { Route, withRouter } from "react-router-dom";
import styled from "styled-components";
import Callback from "./callback.js";
import Landing from "./views/Landing";
import Login from "./Login";
import Logout from "./Logout";
import Schedule from "./views/Schedule";
import Payment from "./views/Payment/payment.js";
import Workouts from "./views/Workouts";
import Progress from "./views/Progress";

const Routes = props => {
	return (
		<ContentContainer>
			<Route exact path="/" component={Landing} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/logout" component={Logout} />
			<Route path="/schedule" component={Schedule} />
			<Route path="/callback" component={Callback} />
			<Route path="/workouts" component={Workouts} />
			<Route exact path="/payment" component={Payment} />
			<Route exact path="/progress" component={Progress} />
		</ContentContainer>
	);
};

const ContentContainer = styled.div`
	width: 100%;
	max-width: 1280px;
	margin: 12px auto;
`;
export default withRouter(Routes);
