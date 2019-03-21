import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const getInfo = gql`
{
  info
}
`;

class App extends Component {
  render() {
    return (
      <div className="App">
    <Query query={getInfo}>
    {({loading, error, data }) => {
      if(loading) return <p>Loading...</p>;
      if(error) return <p>{error.message}</p>;

      return <p>{data.info}</p>;
    }} 
    </Query>
      </div>
    );
  }
}

export default App;
