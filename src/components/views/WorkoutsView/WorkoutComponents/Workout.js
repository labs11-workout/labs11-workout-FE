import React, { Component } from 'react';

class Workout extends React.Component {
    render() {
        return <h1>Hello World!, {this.props.workout.name}</h1>;
    }
}


export default Workout;