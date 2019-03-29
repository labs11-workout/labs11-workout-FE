import React, { Component } from "react";

class Workout extends React.Component {
	render() {
		return <h1>{this.props.workout.name}</h1>;
	}
}

export default Workout;
