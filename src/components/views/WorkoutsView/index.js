import { Query } from "react-apollo";
import gql from "graphql-tag";

const getWorkouts = gql`
{
  workouts {
    id
    name
  }
}
`;

const workouts = props => {
    return (
      <Query query={getWorkouts}>
        {({loading, error, data}) => {
          if(loading) return <p>Loading...</p>;
          if(error) return <p>{error.message}</p>;
          console.log(data);
          return <Workouts workouts={data.getWorkouts} />
        }}
      </Query>
    )
  }

export default withRouter(workouts);
