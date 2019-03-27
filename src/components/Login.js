import React, { useEffect } from "react";
import auth from "../Auth.js";
import { withRouter } from "react-router-dom";

const Login = props => {
	useEffect(() => {
		if (localStorage.getItem('token')){
			props.history.push('/schedule');
		}
		else{
			auth.show();
		}

	});
	return <p>Redirecting you to login page...</p>;
};

export default withRouter(Login);
