import React from "react";
import * as s from "./style";
import { Route } from "react-router-dom";
import Profile from "./profile";

const Settings = props => {
	return (
		<s.Container>
			<Route exact path="/settings" component={Profile} />
		</s.Container>
	);
};

export default Settings;
