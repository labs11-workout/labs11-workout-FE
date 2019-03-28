import React from "react";
import * as s from "../styles.js";
import BodyMeasurement from "./BodyMeasurement";

const BodyMeasurements = ({ measurements }) => {
	return (
		<s.Measurements>
			<h3>Body Measurements</h3>
			{measurements.length > 0 ? (
				measurements.map(m => {
					return <BodyMeasurement key={m.id} measurement={m} />;
				})
			) : (
				<p>You have no Body Measurements recorded. Try Adding One!</p>
			)}
		</s.Measurements>
	);
};

export default BodyMeasurements;
