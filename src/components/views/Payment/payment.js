import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Mutation, Query} from 'react-apollo';
import { withRouter, Redirect } from "react-router-dom";
import Protected from "../../Protected";
import gql from "graphql-tag";

const getUserInfo = gql`
{
    userLogin {
        id
        authId
    }
}
`
;

class Payment extends Component{
    render(){
        return(
			<Query query={getUserInfo}>
				{({data}) => (
                    <StripeCheckout 
                    amount = {9.99} 
                    name="Premium Subscription"
                    >

                    </StripeCheckout>
                )}
			</Query>
        )
    }
}

export default Protected(Payment);