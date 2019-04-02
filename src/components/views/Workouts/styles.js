import styled from "styled-components";
import { CardTitle, CardBody } from "reactstrap";

export const WorkoutsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	justify-content: center;
`;

export const WorkoutContainer = styled.div`
	width: 25%;
	margin: 16px;
	border: 1px solid black;
	border-radius: 4px;
	p {
		margin: 0;
	}
`;

export const CardHeader = styled(CardTitle)`
	&& {
		margin: 4px;
	}
`;

export const CardContent = styled(CardBody)`
	&& {
		padding: 4px;

		hr {
			width: 50%;
			margin: 4px auto;
			color: black;
		}
	}
`;

export const CreateButton = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	margin: 6px;
	color: green;

	&:hover {
		cursor: pointer;
	}
`;

export const DeleteButton = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	margin: 6px;
	color: red;

	&:hover {
		cursor: pointer;
	}
`;


export const Workouts = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	h3 {
		width: 100%;
		margin: 4px;
	}
`;

export const Workout = styled.div`
	position: relative;
	width: 25%;
	margin: 6px;
	border: 1px solid black;
	border-radius: 6px;

	p {
		padding: 0;
		margin: 0;
	}
`;