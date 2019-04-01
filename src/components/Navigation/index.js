import React, { useEffect } from "react";
import * as s from "./styles";

const Navigation = props => {
	//Only re-render if localStorage.getItem("token")] changes.
	useEffect(() => {}, [localStorage.getItem("token")]);

	return (
		<s.Container>
			<s.Link exact to="/">
				Landing Page
			</s.Link>
			{/* Show Logout button and other Auth Required routes if token is present, otherwise show Login button. */}
			{localStorage.getItem("token") ? (
				<>
					<s.Link to="/schedule" activeClassName="active">
						Schedules
					</s.Link>
					<s.Link to="/workouts" activeClassName="active">
						Workouts
					</s.Link>
					<s.Link to="/progress" activeClassName="active">
						Progress
					</s.Link>
					<s.Link to="/payment" activeClassName="active">
						Billing
					</s.Link>
					<s.Link to="/logout" activeClassName="active">
						Logout
					</s.Link>
				</>
			) : (
				<s.Link to="/login">Login</s.Link>
			)}
		</s.Container>
	);
};

export default Navigation;
