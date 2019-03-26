import React, { Component } from "react";
import "./App.css";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { withRouter } from "react-router-dom";

import Navigation from "./components/Navigation";
import Routes from "./components/Routes";

const getInfo = gql`
	{
		info
	}
`;

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navigation />
				<Routes />
				{/* No cache flag makes it query from the API and NOT from our local Apollo Client cache. */}
				<Query query={getInfo} fetchPolicy="no-cache">
					{({ loading, error, data }) => {
						if (loading) return <p>Loading...</p>;
						if (error) {
							return <p>{error.message}</p>;
						}

						return <p>{data.info}</p>;
					}}
				</Query>
			</div>
		);
	}
}

export default withRouter(App);
