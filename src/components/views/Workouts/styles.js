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
