import React, { Component } from "react";
import "./App.css";
import { withRouter } from "react-router-dom";
import Navigation from "./components/Navigation";
import Routes from "./components/Routes";
import Footer from "./components/Footer";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navigation />
				<Routes />
				<Footer />
			</div>
		);
	}
}

export default withRouter(App);
