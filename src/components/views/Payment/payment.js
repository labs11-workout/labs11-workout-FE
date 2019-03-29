import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Mutation, Query} from 'react-apollo';
import { withRouter, Redirect } from "react-router-dom";
import Proptypes from 'prop-types';
import Protected from "../../Protected";
import gql from "graphql-tag";
import Axios from 'axios';

const getUserInfo = gql`
{
    userLogin {
        id
        authId
        premium
    }
}
`
;


class Payment extends Component{
    onToken = (res) => {
        console.log(res.id)
        //make post to graphQL
        Axios.post(
            `${process.env.REACT_APP_GQL_API}payment`, 
            {stripeToken: res.id},
            {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}
            ).then(
                res => {
                    console.log(res.data);
                }
            ).catch( 
                (err) => {
                console.log(err);
                }
            )
    }
    render(){
        return(
			<Query query={getUserInfo}>
				{({loading, error, data}) => {
                    if(loading) return ''
                    if(error) return <p>{error.message}</p>
                    return ( 
                    data.userLogin.premium ? 
                    <p>You already have Premium. Thank you for your support!</p>
                     :
                     <StripeCheckout 
                     amount = {999.00} 
                     name="Premium Subscription"
                     stripeKey={process.env.REACT_APP_STRIPE_KEY}
                     token={this.onToken}
                     >
                     </StripeCheckout>
                    )

                }}
			</Query>
        )
    }
}

export default Protected(Payment);