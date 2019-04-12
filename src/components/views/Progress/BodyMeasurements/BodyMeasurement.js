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

const BodyMeasurement = ({ measurement }) => {
	const m = measurement;
	console.log(m.leftLeg)
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
				<EditBodyMeasurement measurement = {m}>
					Update
				</EditBodyMeasurement>
				</s.Head>
				<CardBody>

				<CardTitle>
				{datefns.format(m.createdAt, "MMM Do YYYY h:mm a")}
				</CardTitle>
					{m.hips && <p>Hips: {m.hips}in</p>}
					{m.waist && <p>Waist: {m.waist}in</p>}
					{m.leftArm && <p>Left Arm: {m.leftArm}in</p>}
					{m.rightArm && <p>Right Arm: {m.rightArm}in</p>}
					{m.leftLeg && <p>Left Leg: {m.leftLeg}in</p>}
					{m.rightLeg && <p>Right Leg: {m.rightLeg}in</p>}
				</CardBody>
			</s.ProgressCard>
		</s.Measurement>
	);
};

export default BodyMeasurement;
