import React from "react";
import * as s from "../styles.js";
import { Card, CardBody, CardTitle, CardHeader } from "reactstrap";
import datefns from "date-fns";
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

const BodyMetric = ({ metric }) => {
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
				<EditBodyMetric metric={m}>Update</EditBodyMetric>
				</s.Head>
				<CardTitle>
				{datefns.format(m.createdAt, "ddd, Do MMM YYYY h:mm a")}
				</CardTitle>
				<CardBody>
					{m.weight && <p>Weight: {m.weight}kg</p>}
					{m.height && <p>Height: {m.height}cm</p>}
					{m.bodyfat && <p>Body Fat: {m.bodyfat}%</p>}
				</CardBody>
			</s.ProgressCard>
		</s.Measurement>
	);
};

export default BodyMetric;
