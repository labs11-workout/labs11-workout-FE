import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Mutation, Query} from 'react-apollo';
import { withRouter, Redirect } from "react-router-dom";
import Proptypes from 'prop-types';
import Protected from "../../Protected";
import gql from "graphql-tag";
import {Card, CardDeck, CardBody} from 'reactstrap';

const getProfile = gql`
{
    getProfile{
    createdAt
    premium
    schedules{
      id
    }
  }
}
`
;

//this is our stripe thing. 

class Profile extends Component{
    render(){
        return(
			<Query query={getProfile}>
				{({loading, error, data}) => {
                    if(loading) return ''
                    if(error) return <p>{error.message}</p>
                    return ( 
                    data.getProfile.premium ? 
                    <>
                    <Card>
                        <CardBody>You are a premium User</CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                        Join: {data.getProfile.createdAt}
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>Number of Entries: {data.getProfile.schedules.length}</CardBody>
                    </Card>
                    </>

                     :

                     <>
                    <Card>
                        <CardBody>You are a NOT a premium User</CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                        Join: {data.getProfile.createdAt}
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>Number of Entries: {data.getProfile.schedules.length}</CardBody>
                    </Card>
                     </>
                    
                    )

                }}
			</Query>
        )
    }
}

export default Protected(Profile);