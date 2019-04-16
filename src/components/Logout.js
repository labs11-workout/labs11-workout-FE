import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

const Logout = props => {
	useEffect(() => {
		localStorage.removeItem("token");
		window.location = "/";
	});
	return <p>Logging you out...</p>;
};

export default withRouter(Logout);
