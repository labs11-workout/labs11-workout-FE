import React from "react";
import * as s from "../styles.js";
import { Card, CardBody, CardTitle, CardHeader } from "reactstrap";
import datefns from "date-fns";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import EditBodyMeasurement from "./EditBodyMeasurements"

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

const IntialBodyMeasurement = ({ measurement }) => {
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

				<CardHeader>
				<EditBodyMeasurement measurement = {m}>
					Update
				</EditBodyMeasurement>
				</CardHeader>
				<CardBody>

				<CardTitle>
				Starting Stats
				</CardTitle>
					{m.hips && <p>Hips: {m.hips}in</p>}
					{m.waist && <p>Waist: {m.waist}in</p>}
					{m.leftArm && <p>Left Arm: {m.leftArm}in</p>}
					{m.rightArm && <p>Right Arm: {m.rightArm}in</p>}
					{m.leftLeg && <p>Left Leg: {m.leftLeg}in</p>}
					{m.rightLeg && <p>Right Leg: {m.rightLeg}in</p>}
				</CardBody>
			</Card>
		</s.Measurement>
	);
};

export default IntialBodyMeasurement;
