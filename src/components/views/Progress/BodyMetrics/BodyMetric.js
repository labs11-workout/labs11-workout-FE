import React from "react";
import * as s from "../styles.js";
import { Card, CardBody, CardTitle } from "reactstrap";
import datefns from "date-fns";

const BodyMetric = ({ metric }) => {
	const m = metric;
	return (
		<s.Measurement>
			<Card>
				<CardTitle>
					{datefns.format(m.createdAt, "ddd, Do MMM YYYY h:mm a")}
				</CardTitle>
				<CardBody>
					{m.weight && <p>Weight: {m.weight}</p>}
					{m.height && <p>Height: {m.height}</p>}
					{m.bodyfat && <p>Body Fat: {m.bodyfat}%</p>}
				</CardBody>
			</Card>
		</s.Measurement>
	);
};

export default BodyMetric;
