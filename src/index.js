import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import { theme } from "./StyleTheme.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.min.css";

const logout = () => {
	localStorage.removeItem("token");
	window.location = "/login";
};

const client = new ApolloClient({
	uri: process.env.REACT_APP_GQL_API,
	onError: ({ networkError }) => {
		if (networkError.statusCode === 401) logout();
	},
	headers: {
		authorization: localStorage.getItem("token")
			? `Bearer ${localStorage.getItem("token")}`
			: ""
	}
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<Router>
			<ThemeProvider theme={theme}>
				<>
					<App />
					<ToastContainer />
				</>
			</ThemeProvider>
		</Router>
	</ApolloProvider>,
	document.getElementById("root")
);
