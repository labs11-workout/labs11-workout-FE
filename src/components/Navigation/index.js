import React, { useEffect } from "react";
import * as s from "./styles";

const Navigation = props => {
	//Only re-render if localStorage.getItem("token")] changes.
	useEffect(() => {
		console.log("UPDATED");
	}, [localStorage.getItem("token")]);

	return (
		<s.Container>
			<h3>Navigation</h3>
			<s.Link to="/">Landing Page</s.Link>
			{/* Show Logout button and other Auth Required routes if token is present, otherwise show Login button. */}
			{localStorage.getItem("token") ? (
				<>
					<s.Link to="/schedule">Schedules</s.Link>
					<s.Link to="/progress">Progress</s.Link>
					<s.Link to="/logout">Logout</s.Link>
				</>
			) : (
				<s.Link to="/login">Login</s.Link>
			)}
		</s.Container>
	);
};

export default Navigation;
