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

// export const AppState = createContext({ state: {}, dispatch: () => {} });

const MyWorkouts = lazy(() => import("./components/views/WorkoutsView/MyWorkouts.js"));


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

				<Route
            exact
            path="/workouts"
            render={props => (
              <Suspense
                fallback={
                  <Loader
                    type="Ball-Triangle"
                    color="#FD8F25"
                    height="180"
                    width="120"
                  />
                }
              >
                <MyWorkouts {...props} />
              </Suspense>
            )}
          />

			</div>

			
		);
	}
}

export default withRouter(App);
