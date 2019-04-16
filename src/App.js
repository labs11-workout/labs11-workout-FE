import React, { Component } from "react";
import "./App.css";
import { withRouter } from "react-router-dom";
import Routes from "./components/Routes";
class App extends Component {
	render() {
		return (
			<div className="App">
				<Routes />
			</div>
		);
	}
}

export default withRouter(App);
