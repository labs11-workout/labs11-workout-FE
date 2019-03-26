import React, { useEffect } from "react";
import auth from "../Auth.js";

const Login = props => {
	useEffect(() => {
		auth.login();
	});
	return <p>Redirecting you to login page...</p>;
};

export default Login;
