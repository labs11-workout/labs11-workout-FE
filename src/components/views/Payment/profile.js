import React, { Component } from "react";
import { Query } from "react-apollo";
import Protected from "../../Protected";
import gql from "graphql-tag";
import { Card, CardBody } from "reactstrap";
import datefns from "date-fns";
import * as s from "./style";
import userImg from './assets/userImg.svg';
import accountImg from './assets/accountImg.svg';


const getProfile = gql`
	{
		getProfile {
			createdAt
			premium
			schedules {
				id
			}
		}
	}
`;
//this is our stripe thing.

class Profile extends Component {
	render() {
		return (
			<Query query={getProfile}>
				{({ loading, error, data }) => {
					if (loading) return "";
					if (error) return <p>{error.message}</p>;
					return data.getProfile.premium ? (
						<>
							<s.Card>
								<s.CardBody>You are a premium User</s.CardBody>
							</s.Card>
							<s.Card>
								<s.CardBody>
									Joined:{" "}
									{datefns.format(
										data.getProfile.createdAt,
										"ddd, Do MMM YYYY h:mm a"
									)}
								</s.CardBody>
							</s.Card>
							<s.Card>
								<s.CardBody>
									Number of Entries: {data.getProfile.schedules.length}
								</s.CardBody>
							</s.Card>
						</>
					) : (
						<>
							<s.Card>
								<s.CardBody>You are a NOT a premium User</s.CardBody>
							</s.Card>
							<s.Card>
								<s.CardBody>
									Joined:{" "}
									{datefns.format(
										data.getProfile.createdAt,
										"ddd, Do MMM YYYY h:mm a"
									)}
								</s.CardBody>
							</s.Card>
							<s.Card>
								<s.CardBody>
									Number of Entries: {data.getProfile.schedules.length}
								</s.CardBody>
							</s.Card>
							<s.Image>
								{/* <img src={ userImg } alt="man looking at personal profile"/> */}
							</s.Image>
							<s.Image>
							<img src={ accountImg } alt="profiles"/>
							</s.Image>
													
						</>
					);
					
				}}
			</Query>
		);
	}
}

export default Protected(Profile);
