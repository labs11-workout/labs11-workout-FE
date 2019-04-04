import React from "react";
import * as s from "../styles.js";
import BodyMetric from "./BodyMetric";
import AddBodyMetric from './AddBodyMetric';

const BodyMetrics = ({ metrics }) => {
	return (
		<s.Measurements>
			<h3>Body Metrics</h3>
			{metrics.length > 0 ? 
			(
				<>
					<BodyMetric key={metrics[0].id} metric={metrics[0]} />
					<BodyMetric key={metrics[metrics.length-1].id} metric={metrics[metrics.length-1]} />
					<AddBodyMetric/>
				</>

			) : (
				<p>You have no Body Metrics recorded. Try Adding One!</p>
			)}
		</s.Measurements>
	);
};

export default BodyMetrics;
