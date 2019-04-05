import React from "react";
import * as s from "../styles.js";
import BodyMeasurement from "./BodyMeasurement";
import AddBodyMeasurement from "./AddBodyMeasurement";

const BodyMeasurements = ({ measurements }) => {
	return (
		<s.Measurements>
			<h3>Body Measurements</h3>
			{measurements.length > 0 ? (
				<>
					<BodyMeasurement key={measurements.id} measurement={measurements[0]} />
					<BodyMeasurement key={measurements.id} measurement={measurements[measurements.length-1]} />
					<AddBodyMeasurement/>
				</>

			) : (
				<p>You have no Body Measurements recorded. Try Adding One!</p>
			)}
		</s.Measurements>
	);
};

export default BodyMeasurements;
