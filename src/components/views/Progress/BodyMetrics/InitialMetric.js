import React from "react";
import * as s from "../styles.js";
import { Card, CardBody, CardTitle, CardHeader } from "reactstrap";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import EditBodyMetric from "./EditBodyMetric";

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

const InitialBodyMetric = ({ metric }) => {
	const m = metric;

	return (
		<s.Measurement>
			<s.ProgressCard>
				<Mutation
					mutation={deleteBodyMetric}
					refetchQueries={() => [{ query: getBodyMetrics }]}
				>
					{(deleteBodyMetric, { data }) => {
						return (
							<s.DeleteButton
								onClick={() => deleteBodyMetric({ variables: { id: m.id } })}
							>
								<i className="fas fa-times"></i>
							</s.DeleteButton>
						);
					}}
				</Mutation>
			
				<s.Head>
				<EditBodyMetric metric={m}></EditBodyMetric>
				Start
				</s.Head>
				<CardBody>
					{m.weight && <p>Weight: {m.weight}kg</p>}
					{m.height && <p>Height: {m.height}cm</p>}
					{m.bodyfat && <p>Body Fat: {m.bodyfat}%</p>}
				</CardBody>
			</s.ProgressCard>
		</s.Measurement>
	);
};

export default InitialBodyMetric;
