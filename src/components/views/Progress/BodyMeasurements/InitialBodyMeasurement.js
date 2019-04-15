import React from "react";
import * as s from "../styles.js";
import { Card, CardBody, CardTitle, CardHeader } from "reactstrap";
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
			<s.ProgressCard>
				<Mutation
					mutation={deleteBodyMeasurement}
					refetchQueries={() => [{ query: getBodyMeasurements }]}
				>
					{(deleteBodyMeasurement, { data }) => (
						<s.DeleteButton
							onClick={() => deleteBodyMeasurement({ variables: { id: m.id } })}
						>
							<i className="fas fa-times"></i>
						</s.DeleteButton>
					)}
				</Mutation>

				<s.Head>
				Start
				<EditBodyMeasurement measurement = {m}>
				</EditBodyMeasurement>
				</s.Head>
				<CardBody>
					{m.hips > 0 && <p>Hips: {m.hips}in</p>}
					{m.waist > 0 && <p>Waist: {m.waist}in</p>}
					{m.leftArm > 0 && <p>Left Arm: {m.leftArm}in</p>}
					{m.rightArm > 0 && <p>Right Arm: {m.rightArm}in</p>}
					{m.leftLeg > 0 && <p>Left Leg: {m.leftLeg}in</p>}
					{m.rightLeg > 0 && <p>Right Leg: {m.rightLeg}in</p>}
				</CardBody>
			</s.ProgressCard>
		</s.Measurement>
	);
};

export default IntialBodyMeasurement;
