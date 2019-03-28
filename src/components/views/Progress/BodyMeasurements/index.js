import React from "react";
import * as s from "../styles.js";
import BodyMeasurement from "./BodyMeasurement";

const BodyMeasurements = ({ measurements }) => {
	return (
		<s.Measurements>
			<h3>Body Measurements</h3>
			{measurements.map(m => {
				return <BodyMeasurement key={m.id} measurement={m} />;
			})}
		</s.Measurements>
	);
};

export default BodyMeasurements;
