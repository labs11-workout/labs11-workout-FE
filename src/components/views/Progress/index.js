import React, { useEffect } from "react";
import { Route, withRouter} from "react-router-dom";
import * as s from "./styles.js";
import Protected from "../../Protected";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Loading from "../../Loading";
import BodyMetrics from "./BodyMetrics/";
import BodyMeasurements from "./BodyMeasurements/";
import { withTheme } from "styled-components";

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



const Progress = props => {
	useEffect(() => {
		if (props.location.pathname === "/progress") {
			props.history.push("/progress/bodymetrics");
		}
	},[]);
	console.log(props)
	return (
		<s.Container>
			<Query query={getMetricsAndMeasurements}>
				{({ loading, error, data }) => {
					if (loading) return <Loading />;
					if (error) return <p>{error.message}</p>;
					return (
						<>
						<s.Menu>
							<h3>Menu</h3>
							<hr />
							<s.MenuLink activeClassName="active" to="/progress/bodymetrics">
								Body Metrics
							</s.MenuLink>
							<s.MenuLink activeClassName="active" to="/progress/bodymeasurements">
								Body Measurements
							</s.MenuLink>
						</s.Menu>
						<s.Content>
								<Route
									exact path="/progress/bodymetrics"
									render={() => (
										<BodyMetrics metrics={data.getBodyMetrics} />
									)}
								/>
								<Route
									exact path="/progress/bodymeasurements"
									render={() => (
										<BodyMeasurements measurements={data.getBodyMeasurements} />
									)}
								/>
								{/* <Route exact path="/progress/bodymetrics" component={BodyMetrics} />
								<Route exact path="/progress/bodymeasurements" component={BodyMeasurements} /> */}
							</s.Content>
							
							
						</>
					);
				}}
			</Query>
		</s.Container>
	);
};

export default withTheme(Protected(withRouter(Progress)));
