import styled from "styled-components";
import { Card } from "reactstrap";

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
`;

export const WorkoutList = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	width: 100%;
`;

export const WorkoutCard = styled(Card)`
	&& {
		border-color: rgba(0, 0, 0, 0.3);
	}
	width: 30%;
	margin: 16px auto;
	@media (max-width: 960px) {
		width: 95%;
	}
`;
