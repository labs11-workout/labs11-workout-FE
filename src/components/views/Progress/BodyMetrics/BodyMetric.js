import React from "react";
import * as s from "../styles.js";
import { CardBody} from "reactstrap";
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
				<EditBodyMetric metric={m}></EditBodyMetric>
				{datefns.format(m.createdAt, "MMM Do YYYY")}
				</s.Head>
				<CardBody>
					{m.weight > 0 && <p>Weight: {m.weight}kg</p>}
					{m.height > 0 && <p>Height: {m.height}cm</p>}
					{m.bodyfat !== 0 && <p>Body Fat: {m.bodyfat}%</p>}
				</CardBody>
			</s.ProgressCard>
		</s.Measurement>
	);
};

export default BodyMetric;
