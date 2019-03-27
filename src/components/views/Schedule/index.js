import React from "react";
import * as s from "./styles";
import Protected from "../../Protected";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const getSchedules = gql`
  {
    getSchedules {
      id
      time
    }
  }
`;

// calendar => pick day and time => click create schedule => then can freely add workout. most importnat is to add a dynamic calendar, with mobile view of 7 days

//TODO add a schedule, mutation called addSchedule

const Schedule = props => {
  return (
    <s.Container>
      Schedule Page
      <Query query={getSchedules}>
        {({ loading, error, data }) => {
          if (loading) return <p> loading </p>;
          if (error) return <p> error </p>;
          console.log(data);
          return <p> loaded </p>;
        }}
      </Query>
    </s.Container>
  );
};

export default Protected(Schedule);
