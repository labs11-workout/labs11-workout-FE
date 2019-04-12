import React, { useEffect } from "react";
import * as s from "./style";
import { Route } from "react-router-dom";
import Payment from "./payment";
import Profile from "./profile";
import { Card, CardDeck, CardBody, CardTitle} from "reactstrap";

const Settings = props => {
	useEffect(() => {
		if (props.location.pathname === "/settings") {
			props.history.push("/settings/profile");
		}
	});
	return (
		<s.Container>
			<s.Menu>
				<h3>Menu</h3>
				<hr />
				<s.MenuLink activeClassName="active" to="/settings/profile">
					User Profile
				</s.MenuLink>
				{/* <s.MenuLink activeClassName="active" to="/settings/interface">
					User Interface Settings
				</s.MenuLink> */}
				<s.MenuLink activeClassName="active" to="/settings/billing">
					Billing
				</s.MenuLink>
				{/* <s.MenuLink activeClassName="active" to="/settings/notifications">
					Notifications
				</s.MenuLink> */}
			</s.Menu>
			<Route exact path="/settings/billing" component={Payment} />
			<Route exact path="/settings/profile" component={Profile} />
		</s.Container>
	);
};

export default Settings;
