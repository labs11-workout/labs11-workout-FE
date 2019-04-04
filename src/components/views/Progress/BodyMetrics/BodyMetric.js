import React, { useState} from "react";
import * as s from "../styles.js";
import { Card, CardBody, CardTitle, Form, FormGroup, Button } from "reactstrap";
import datefns from "date-fns";
import { Mutation, Query } from "react-apollo";
import gql from "graphql-tag";

const deleteBodyMetric = gql`
	mutation DeleteBodyMetric($id: ID!) {
		deleteBodyMetric(id: $id) {
			id
		}
	}
`;
const editBodyMetric = gql`
	mutation EditBodyMetric($id: ID!) {
		editBodyMetric(id: $id) {
			height
			weight
			bodyfat
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
					{(deleteBodyMetric, { data }) => {
						return<s.DeleteButton
							onClick={() => deleteBodyMetric({ variables: { id: m.id } })}
						>
							X
						</s.DeleteButton>
					}}
				</Mutation>
				<Mutation
					mutation={editBodyMetric}
					refetchQueries={() => [{ query: getBodyMetrics }]}
				>
					{(editBodyMetric, { data }) => (
						<s.UpdateButton
							onClick={() => editBodyMetric({ variables: { id: m.id } })}
						>
							Update {console.log(data)}
						</s.UpdateButton>
					)}
				</Mutation>
				
				<CardTitle>
					{datefns.format(m.createdAt, "ddd, Do MMM YYYY h:mm a")}
				</CardTitle>
				<CardBody>
					{m.weight && <p>Weight: {m.weight}kg</p>}
					{m.height && <p>Height: {m.height}cm</p>}
					{m.bodyfat && <p>Body Fat: {m.bodyfat}%</p>}
				</CardBody>
			</Card>

		</s.Measurement>

	);
};

export default BodyMetric;
