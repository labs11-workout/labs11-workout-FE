import React from "react";
import * as s from "../styles.js";
import { Card, CardBody, CardTitle } from "reactstrap";
import datefns from "date-fns";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const deleteBodyMeasurement = gql`
	mutation DeleteBodyMeasurement($id: ID!) {
		deleteBodyMeasurement(id: $id) {
			id
		}
	}
`;

const getBodyMeasurements = gql`
	{
		getBodyMeasurements {
			id
			createdAt
			hips
			waist
			leftArm
			rightArm
			leftLeg
			rightLeg
		}
	}
`;

const BodyMeasurement = ({ measurement }) => {
	const m = measurement;
	return (
		<s.Measurement>
			<Card>
				<Mutation
					mutation={deleteBodyMeasurement}
					refetchQueries={() => [{ query: getBodyMeasurements }]}
				>
					{(deleteBodyMeasurement, { data }) => (
						<s.DeleteButton
							onClick={() => deleteBodyMeasurement({ variables: { id: m.id } })}
						>
							X
						</s.DeleteButton>
					)}
				</Mutation>
				<CardTitle>
					{datefns.format(m.createdAt, "ddd, Do MMM YYYY h:mm a")}
				</CardTitle>
				<CardBody>
					{m.hips && <p>Hips: {m.hips}in</p>}
					{m.waist && <p>Waist: {m.waist}in</p>}
					{m.leftArm && <p>Left Arm: {m.leftArm}</p>}
					{m.rightArm && <p>Right Arm: {m.rightArm}</p>}
					{m.leftLeg && <p>Left Leg: {m.leftLeg}</p>}
					{m.rightLeg && <p>Right Leg: {m.rightLeg}</p>}
				</CardBody>
			</Card>
		</s.Measurement>
	);
};

export default BodyMeasurement;
