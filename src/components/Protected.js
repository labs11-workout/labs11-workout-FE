import React from "react";
import { Redirect } from "react-router-dom";

// Redirect user to Login page if no JWT token present.
// Otherwise, render Component passed into HOC.
const Protected = Component => () => {
	if (localStorage.getItem("token")) return <Component />;
	if (!localStorage.getItem("token")) return <Redirect to="/login" />;
};

export default Protected;
