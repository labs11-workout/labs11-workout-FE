import React from "react";
import * as s from "../styles.js";
import BodyMetric from "./BodyMetric";

const BodyMetrics = ({ metrics }) => {
	return (
		<s.Measurements>
			<h3>Body Metrics</h3>
			{metrics.map(m => {
				return <BodyMetric key={m.id} metric={m} />;
			})}
		</s.Measurements>
	);
};

export default BodyMetrics;
