import React from "react";
import { Query, withApollo } from "react-apollo";
import { toast } from "react-toastify";
import Protected from "../../Protected";
import Axios from "axios";
import gql from "graphql-tag";
import Loading from "../../Loading";
import StripeCheckout from "react-stripe-checkout";
import datefns from "date-fns";
import * as s from "./style";

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
				//We wrapped component export with the withApollo higher order component, which allows us to execute Apollo Client queries/mutations anywhere in the component.
				props.client.query({
					query: getProfile,
					fetchPolicy: "network-only"
				});
				toast.success("Thank you for your premium purchase!");
			})
			.catch(err => {
				console.log(err);
			});
	};

	return (
		<Query query={getProfile}>
			{({ loading, error, data }) => {
				if (loading) return <Loading />;
				if (error) return <p>{error.message}</p>;
				return (
					<s.SettingsContainer>
						<h3>Profile</h3>
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
