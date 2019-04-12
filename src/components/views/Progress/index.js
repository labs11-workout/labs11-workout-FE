import React from "react";
import * as s from "./styles.js";
import Protected from "../../Protected";
import gql from "graphql-tag";
import { Query } from "react-apollo";

import BodyMetrics from "./BodyMetrics/";
import BodyMeasurements from "./BodyMeasurements/";

//When a Query Component gets the Data after running this query. It will have data.getBodyMetrics, and data.getBodyMeasurements
const getMetricsAndMeasurements = gql`
	{
		getBodyMetrics {
			id
			createdAt
			weight
			height
			bodyfat
		}
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

const getCompletedSchedules = gql`
	{
		getSchedules {
			id
			completed
			workouts {
				completed
			}
		}
	}
`;

const Progress = props => {
	return (
		<s.Container>
			<Query query={getMetricsAndMeasurements}>
				{({ loading, error, data }) => {
					if (loading) return <p>Loading...</p>;
					if (error) return <p>{error.message}</p>;
					return (
						<>
							<BodyMetrics metrics={data.getBodyMetrics} />
							<BodyMeasurements measurements={data.getBodyMeasurements} />
						</>
					);
				}}
			</Query>
		</s.Container>
	);
};

export default Protected(Progress);
