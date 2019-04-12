import React from "react";
import * as s from "../styles.js";
import BodyMetric from "./BodyMetric";
import AddBodyMetric from "./AddBodyMetric";
import InitialBodyMetric from "./InitialMetric";

const BodyMetrics = ({ metrics }) => {
		
			if(metrics.length === 1){
				return(
				<s.Measurements>
					<h3>Body Metrics</h3>
					<AddBodyMetric />
					<InitialBodyMetric key={metrics[0].id} metric={metrics[0]} />
				</s.Measurements>
				);
			}
			else if (metrics.length > 0) {
			return(
				<s.Measurements>
					<h3>Body Metrics</h3>
					<AddBodyMetric />
					<InitialBodyMetric key={metrics[0].id} metric={metrics[0]} />
					<BodyMetric
						key={metrics[metrics.length - 1].id}
						metric={metrics[metrics.length - 1]}
					/>
					
				</s.Measurements>
			)
			} else{
				return(
				<s.Measurements>
					<h3>Body Metrics</h3>
					<AddBodyMetric />
					<span>You have no Body Metrics recorded. Try Adding One!</span>
				</s.Measurements>
				);
			}
			
		
};

export default BodyMetrics;
