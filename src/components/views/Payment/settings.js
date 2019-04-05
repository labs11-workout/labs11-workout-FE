import React from "react";
import * as s from "./style";
import { Route, withRouter } from "react-router-dom";
import Payment from "./payment";

const Settings = props => {
	return (
		<s.Container>
			<s.Menu>
				<h3>Menu</h3>
				<hr />
				<s.MenuLink activeClassName="active" to="/settings/saved">
					User Profile
				</s.MenuLink>
				<s.MenuLink activeClassName="active" to="/settings/scheduled">
					Scheduled Workouts
				</s.MenuLink>
                <s.MenuLink activeClassName="active" to="/settings/billing">
					Billing
				</s.MenuLink>
			</s.Menu>
            <Route exact path="/settings/billing" component={Payment}/>
		</s.Container>
	);
};

export default Settings;