import React from "react";
import * as s from "../styles.js";
import Protected from "../../Protected";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Loading from "../../Loading";

const getCompletedSchedules = gql`
	{
		getSchedules {
			id
			completed
			workouts {
				completed
			}
		}
	}
`;