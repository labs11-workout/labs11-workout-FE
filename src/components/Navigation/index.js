import React, { useState, useEffect } from "react";
import { withTheme } from "styled-components";
import * as s from "./styles";

const Navigation = props => {
	//Only re-render if localStorage.getItem("token")] changes.
	const [navOpen, toggleNav] = useState(false);
	useEffect(() => {}, [localStorage.getItem("token")]);

	return (
		<s.Container>
			{!localStorage.getItem("token") ? (
				<h1>Welcome to CleanLift!</h1>
			) : (
				<s.NavToggle>
					{navOpen ? (
						<i className="fas fa-times" onClick={() => toggleNav(!navOpen)} />
					) : (
						<i className="fas fa-bars" onClick={() => toggleNav(!navOpen)} />
					)}
				</s.NavToggle>
			)}
			<s.Links className={navOpen && "open"}>
				{/* Show Logout button and other Auth Required routes if token is present, otherwise show Login button. */}
				{localStorage.getItem("token") ? (
					<>
						<s.Link to={`/schedule`} activeClassName="active">
							Calendar
						</s.Link>
						<s.Link to="/workouts" activeClassName="active">
							Workouts
						</s.Link>
						<s.Link to="/progress" activeClassName="active">
							Progress
						</s.Link>
						{/* <s.Link to="/notes" activeClassName="active">
							Notes
						</s.Link> */}
						<s.Link to="/settings" activeClassName="active">
							Settings
						</s.Link>
						<s.Link to="/logout" activeClassName="active">
							Logout
						</s.Link>
					</>
				) : (
					<>
						{/* <s.Link exact to="/">
					Welcome To CleanLift!
					</s.Link> */}

						{/* <s.Link to="/login">Login</s.Link> */}
					</>
				)}
			</s.Links>
		</s.Container>
	);
};

export default withTheme(Navigation);
