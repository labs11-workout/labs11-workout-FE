import React from "react";
import * as s from "../styles.js";
import BodyMeasurement from "./BodyMeasurement";
import AddBodyMeasurement from "./AddBodyMeasurement";



const BodyMeasurements = ({ measurements }) => {
	console.log(measurements.length)
		if ((measurements.length) === 1){
				
				return(
				<s.Measurements>
				<BodyMeasurement key={measurements.id} measurement={measurements[0]}/>
				<AddBodyMeasurement/>
				</s.Measurements>
				)
			}
			else if(measurements.length > 0){
				return(
					<s.Measurements>
						<h3>Body Measurements</h3>
						<BodyMeasurement key={measurements.id} measurement={measurements[0]} />
						<BodyMeasurement key={measurements.id} measurement={measurements[measurements.length-1]} />
						<AddBodyMeasurement/>
					</s.Measurements>
				)
	
			}   
			else {
				return(
				<s.Measurements>
				<p>You have no Body Measurements recorded. Try Adding One!</p>
				<AddBodyMeasurement/>
				</s.Measurements>
				)}
	
};

export default BodyMeasurements;
