import React from "react";
import * as s from "../styles.js";
import BodyMeasurement from "./BodyMeasurement";
import AddBodyMeasurement from "./AddBodyMeasurement";
import IntialBodyMeasurement from "./InitialBodyMeasurement"



const BodyMeasurements = ({ measurements }) => {
		if ((measurements.length) === 1){
				
				return(
				<s.Measurements>
				<h2>Body Measurements</h2>
				<hr />
				<AddBodyMeasurement/>
				<IntialBodyMeasurement key={measurements.id} measurement={measurements[0]}/>
				</s.Measurements>
				)
			}
			else if(measurements.length > 0){
				return(
					<s.Measurements>
						<h2>Body Measurements</h2>
						<hr />
						<AddBodyMeasurement/>
						<IntialBodyMeasurement key={measurements.id} measurement={measurements[0]} />
						<BodyMeasurement key={measurements.id} measurement={measurements[measurements.length-1]} />
						
					</s.Measurements>
				)
	
			}  
			else {
				return(
				<s.Measurements>
				<h2>Body Measurements</h2>
				<hr />
				<p>You have no Body Measurements recorded. Try Adding One!</p>
				<AddBodyMeasurement/>
				</s.Measurements>
				)}
	
};

export default BodyMeasurements;
