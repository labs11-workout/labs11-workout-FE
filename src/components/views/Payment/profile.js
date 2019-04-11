import React, { Component } from "react";
import { Query } from "react-apollo";
import Protected from "../../Protected";
import gql from "graphql-tag";
import { Card, CardBody } from "reactstrap";
import datefns from "date-fns";

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
							<Card>
								<CardBody>You are a premium User</CardBody>
							</Card>
							<Card>
								<CardBody>
									Joined:{" "}
									{datefns.format(
										data.getProfile.createdAt,
										"ddd, Do MMM YYYY h:mm a"
									)}
								</CardBody>
							</Card>
							<Card>
								<CardBody>
									Number of Entries: {data.getProfile.schedules.length}
								</CardBody>
							</Card>
						</>
					) : (
						<>
							<Card>
								<CardBody>You are a NOT a premium User</CardBody>
							</Card>
							<Card>
								<CardBody>
									Joined:{" "}
									{datefns.format(
										data.getProfile.createdAt,
										"ddd, Do MMM YYYY h:mm a"
									)}
								</CardBody>
							</Card>
							<Card>
								<CardBody>
									Number of Entries: {data.getProfile.schedules.length}
								</CardBody>
							</Card>
						</>
					);
				}}
			</Query>
		);
	}
}

export default Protected(Profile);
