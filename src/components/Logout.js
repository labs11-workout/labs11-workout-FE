import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

const Logout = props => {
	useEffect(() => {
		localStorage.removeItem("token");
		window.href = "/";
	});
	return <p>Redirecting you to home page...</p>;
};

export default withRouter(Logout);
