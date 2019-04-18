import React, { useState, useEffect } from "react";
import { withTheme } from "styled-components";
import * as s from "./styles";
import logo from "./SecondaryLogo.png";

const Navigation = props => {
	//Only re-render if localStorage.getItem("token")] changes.
	const [navOpen, toggleNav] = useState(false);
	useEffect(() => {}, [localStorage.getItem("token")]);

	return (
		<s.Container>
			<s.Content>
				<div className="image">
					<img src={logo} alt="CleanLift" />
				</div>
				{!localStorage.getItem("token") ? (
					<h1 />
				) : (
					<s.NavToggle>
						{navOpen ? (
							<i className="fas fa-times" onClick={() => toggleNav(!navOpen)} />
						) : (
							<i className="fas fa-bars" onClick={() => toggleNav(!navOpen)} />
						)}
					</s.NavToggle>
				)}
				<s.Links className={`navlinks ${navOpen && "open"}`}>
					{/* Show Logout button and other Auth Required routes if token is present, otherwise show Login button. */}
					{localStorage.getItem("token") ? (
						<>
							<s.Link
								to={`/schedule`}
								onClick={() => toggleNav(false)}
								activeClassName="active"
							>
								Calendar
							</s.Link>
							<s.Link
								to="/workouts"
								onClick={() => toggleNav(false)}
								activeClassName="active"
							>
								Workouts
							</s.Link>
							<s.Link
								to="/progress"
								onClick={() => toggleNav(false)}
								activeClassName="active"
							>
								Progress
							</s.Link>
							{/* <s.Link to="/notes" activeClassName="active">
							Notes
						</s.Link> */}
							<s.Link
								to="/settings"
								onClick={() => toggleNav(false)}
								activeClassName="active"
							>
								Profile
							</s.Link>
							<s.Link to="/logout" className="logout" activeClassName="active">
								<s.AddButton>Logout</s.AddButton>
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
				{localStorage.getItem("token") && (
					<div className="logout-link">
						<s.Link
							to="/logout"
							className="no-underline"
							activeClassName="active"
						>
							<s.AddButton>Logout</s.AddButton>
						</s.Link>
					</div>
				)}
			</s.Content>
		</s.Container>
	);
};

export default withTheme(Navigation);
