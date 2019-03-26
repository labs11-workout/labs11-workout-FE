import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
  link: authLink,
  uri: process.env.REACT_APP_GQL_API
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  console.log(token)
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});



ReactDOM.render(
    <ApolloProvider client={client}>
      <Router>
        <App />
      </Router>
    </ApolloProvider>,
  document.getElementById("root")
);
