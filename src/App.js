import React, { Component, Suspense, useState, useContext, lazy } from "react";
import "./App.css";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { withRouter } from "react-router-dom";

import Navigation from "./components/Navigation";
import Routes from "./components/Routes";

import styled, { ThemeProvider } from "styled-components";
import { theme } from "./StyleTheme";
import { Store } from "./index";
import Loader from "react-loader-spinner";
import { Route } from 'react-router-dom';


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
				<Query query={getInfo}>
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
