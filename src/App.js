import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Link, Route, withRouter} from "react-router-dom";
import auth from './Auth.js';
import { Button } from 'reactstrap';
import Callback from './components/callback.js'

const getInfo = gql`
{
  info
}
`;



class App extends Component {  
  
  goTo(route) {
  this.history.replace(`/${route}`)
}

login() {
  auth.login();
}

logout() {
  auth.logout();
}

componentDidMount() {
  const token = localStorage.getItem('token');
  console.log(token);
  const { renewSession } = auth;

  if (localStorage.getItem('isLoggedIn') === 'true') {
    renewSession();
  }
}

render() {
  const { isAuthenticated } = auth;
    return (
      <div className="App">
    <Query query={getInfo}>
    {({loading, error, data }) => {
      if(loading) return <p>Loading...</p>;
      if(error) return <p>{error.message}</p>;

      return <p>{data.info}</p>;
    }} 
    </Query>
    <Button
              bsStyle="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'home')}
            >
              Home
            </Button>
            {
              !isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
                )
            }
            <Route path='/callback' component={Callback}/>
      </div>
    );
  }
}

export default withRouter(App);
