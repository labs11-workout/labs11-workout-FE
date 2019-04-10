import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./StyleTheme.js";
import "bootstrap/dist/css/bootstrap.min.css";

const client = new ApolloClient({
	uri: process.env.REACT_APP_GQL_API,
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
				<App />
			</ThemeProvider>
		</Router>
	</ApolloProvider>,
	document.getElementById("root")
);
