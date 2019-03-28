import React from "react";
import * as s from "../styles.js";
import { Card, CardBody, CardTitle } from "reactstrap";
import datefns from "date-fns";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const deleteBodyMetric = gql`
	mutation DeleteBodyMetric($id: ID!) {
		deleteBodyMetric(id: $id) {
			id
		}
	}
`;

const getBodyMetrics = gql`
	{
		getBodyMetrics {
			id
			createdAt
			weight
			height
			bodyfat
		}
	}
`;

const BodyMetric = ({ metric }) => {
	const m = metric;
	return (
		<s.Measurement>
			<Card>
				<Mutation
					mutation={deleteBodyMetric}
					refetchQueries={() => [{ query: getBodyMetrics }]}
				>
					{(deleteBodyMetric, { data }) => (
						<s.DeleteButton
							onClick={() => deleteBodyMetric({ variables: { id: m.id } })}
						>
							X
						</s.DeleteButton>
					)}
				</Mutation>
				<CardTitle>
					{datefns.format(m.createdAt, "ddd, Do MMM YYYY h:mm a")}
				</CardTitle>
				<CardBody>
					{m.weight && <p>Weight: {m.weight}</p>}
					{m.height && <p>Height: {m.height}</p>}
					{m.bodyfat && <p>Body Fat: {m.bodyfat}%</p>}
				</CardBody>
			</Card>
		</s.Measurement>
	);
};

export default BodyMetric;
