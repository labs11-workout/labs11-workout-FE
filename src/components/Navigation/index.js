import React from "react";
import * as s from "./styles";

const Navigation = props => {
	return (
		<s.Container>
			<h3>Navigation</h3>
			<s.Link to="/">Landing Page</s.Link>
			{/* Show Logout button and other Auth Required routes if token is present, otherwise show Login button. */}
			{localStorage.getItem("token") ? (
				<>
					<s.Link to="/home">Home/Schedules</s.Link>
					<s.Link to="/logout">Logout</s.Link>
				</>
			) : (
				<s.Link to="/login">Login</s.Link>
			)}
		</s.Container>
	);
};

export default Navigation;
