import React, { useEffect } from "react";
import auth from "../Auth.js";
import { withRouter } from "react-router-dom";
import dateFns from "date-fns";

const Login = props => {
	let d = dateFns.format(new Date(), "MM-DD-YYYY");

	useEffect(() => {
		if (localStorage.getItem("token")) {
			props.history.push(`/schedule/${d}`);
		} else {
			auth.show();
		}
	});
	return <p>Redirecting you to login page...</p>;
};

export default withRouter(Login);
