import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { Query } from "react-apollo";
import Protected from "../../Protected";
import gql from "graphql-tag";
import Axios from "axios";
import * as s from "./style";
import paymentImg from './assets/paymentImg.svg';

const getUserInfo = gql`
	{
		userLogin {
			id
			authId
			premium
		}
	}
`;
//this is our stripe thing.

class Payment extends Component {
	onToken = res => {
		console.log(res.id);
		//make post to graphQL
		Axios.post(
			`${process.env.REACT_APP_GQL_API}payment`,
			{ stripeToken: res.id },
			{ headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
		)
			.then(res => {
				console.log(res.data);
			})
			.catch(err => {
				console.log(err);
			});
	};
	render() {
		return (
			<Query query={getUserInfo}>
				{({ loading, error, data }) => {
					if (loading) return "";
					if (error) return <p>{error.message}</p>;
					return data.userLogin.premium ? (
						<p>You already have Premium. Thank you for your support!</p>
					) : (
						<StripeCheckout
							amount={999.0}
							name="Premium Subscription"
							stripeKey={process.env.REACT_APP_STRIPE_KEY}
							token={this.onToken}
							
						/>
						
					);
				}}
			</Query>
		);
	}
}
			
  
export default Protected(Payment);


