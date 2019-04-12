import styled from "styled-components";
import { Card } from "reactstrap";

export const Container = styled.div`
	width: 100%;
`;

export const Measurements = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	h3 {
		width: 100%;
		margin: 4px;
	}
`;

export const Measurement = styled.div`
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

export const UpdateButton = styled.div`
	position: absolute;
	top: 0;
	left: 0;
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

export const ProgressCard = styled(Card)`
	&& {
		border-color: rgba(0, 0, 0, 0.3);
		box-shadow: 0px 1px 2px black;
	}
	width: 30%;
	margin: 16px auto;
	@media (max-width: 960px) {
		width: 95%;
	}
`;
