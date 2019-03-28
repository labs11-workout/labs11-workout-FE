import React from "react";
import Protected from "../../Protected";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const getWorkouts = gql`
	{
		getWorkouts {
			id
			name
			exercises {
				id
				name
				interval
				rep
				set
				duration
				intensity
			}
		}
	}
`;

const Workouts = props => {
	return (
		<Query query={getWorkouts}>
			{({ loading, error, data }) => {
				if (loading) return <p>Loading...</p>;
				if (error) return <p>{error.message}</p>;
				console.log(data);
			}}
		</Query>
	);
};

export default Protected(Workouts);