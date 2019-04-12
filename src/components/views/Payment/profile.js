import React, { Component } from "react";
import { Query, withApollo } from "react-apollo";
import Protected from "../../Protected";
import Axios from "axios";
import gql from "graphql-tag";
import StripeCheckout from "react-stripe-checkout";
import datefns from "date-fns";
import * as s from "./style";
import accountImg from "./assets/accountImg.svg";

const getProfile = gql`
	{
		getProfile {
			id
			authId
			premium
			savedWorkouts {
				id
			}

			schedules {
				id
			}
			createdAt
		}
	}
`;

const Profile = props => {
	const onToken = res => {
		Axios.post(
			`${process.env.REACT_APP_GQL_API}payment`,
			{ stripeToken: res.id },
			{ headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
		)
			.then(res => {
				//We wrapped component export with the with
				props.client.query({
					query: getProfile,
					fetchPolicy: "network-only"
				});
			})
			.catch(err => {
				console.log(err);
			});
	};

	return (
		<Query query={getProfile}>
			{({ loading, error, data }) => {
				if (loading) return "";
				if (error) return <p>{error.message}</p>;
				return (
					<s.SettingsContainer>
						<s.Image>
							<img src={accountImg} alt="profiles" />
						</s.Image>
						<s.PCard>
							<s.PCardBody>
								<p>
									<strong>Joined: </strong>{" "}
									{datefns.format(
										data.getProfile.createdAt,
										"ddd, Do MMM YYYY h:mm a"
									)}
								</p>
								<p>
									<strong>Number of Workout Sessions: </strong>{" "}
									{data.getProfile.schedules.length}
								</p>
								<p>
									<strong>Premium: </strong>
									{data.getProfile.premium
										? "You have a Premium Account."
										: "No Premium"}
								</p>
								{!data.getProfile.premium && (
									<StripeCheckout
										amount={999.0}
										name="CleanLift Premium Subscription"
										stripeKey={process.env.REACT_APP_STRIPE_KEY}
										token={onToken}
									/>
								)}
							</s.PCardBody>
						</s.PCard>
					</s.SettingsContainer>
				);
			}}
		</Query>
	);
};

export default Protected(withApollo(Profile));
