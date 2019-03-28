import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const userLogin = gql`
	{
		userLogin {
			id
			authId
		}
	}
`;

class Callback extends Component {
	async componentDidMount() {
		const url = window.location.href;
		const idToken = url.split("id_token=")[1];
		localStorage.setItem("token", idToken);
		this.props.history.push("/schedule");
		// Current race condition. Redirect to /schedule, as well as Query component returning redirect to /schedule. however, we need userLogin to be queried so a user is created if there is not one present currently.
	}

	render() {
		return (
			<Query query={userLogin}>
				{(loading, error, data) => {
					if (loading) return <p>Loading...</p>;
					if (error) return <p>Error...</p>;
					return <Redirect to="/schedule" />;
				}}
			</Query>
		);
	}
}

export default withRouter(Callback);
