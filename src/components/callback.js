import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Callback extends Component {
	async componentDidMount() {
		const url = window.location.href;
		const idToken = url.split("id_token=")[1];
		localStorage.setItem("token", idToken);
		this.props.history.push("/home");
	}

	render() {
		const style = {
			position: "absolute",
			display: "flex",
			justifyContent: "center",
			height: "100vh",
			width: "100vw",
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
			backgroundColor: "white"
		};

		return <div style={style}>Loading...</div>;
	}
}

export default withRouter(Callback);
