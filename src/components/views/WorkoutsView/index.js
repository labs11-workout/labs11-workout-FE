import React from "react";
import Protected from "../../Protected";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Workout from './WorkoutComponents/Workout.js';

const getWorkouts = gql`
{
  getSavedWorkouts{
      id
      name
      exercises {
        id
        name
        sets
        intervals
        intensity
        duration
      }
    }
}
`;

const Workouts = props => {
    return (
      <Query query={getWorkouts}>
        {({loading, error, data}) => {
          if(loading) return <p>Loading...</p>;
          if(error) return <p>{error.message}</p>;
          console.log(data);
          return <>{data.getSavedWorkouts.map(w => <Workout workout={w} />)}</>
        }}
      </Query>
    )
  }

export default (Workouts);