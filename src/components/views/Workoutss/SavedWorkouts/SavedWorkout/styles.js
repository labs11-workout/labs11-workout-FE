import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Card, CardHeader, CardBody } from "reactstrap";

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

export const NestedCard = styled(Card)`
	&& {
		width: 100%;
		padding: 0;
	}
`;

export const CardHead = styled(CardHeader)`
	display: flex;
	justify-content: space-between;
	span {
		transition: 0.4s all;
	}
	span.active {
		color: #1a8fff;
	}
	span:hover {
		cursor: pointer;
		color: #1a8fff;
	}
`;

export const CardMain = styled(CardBody)`
	display: flex;
	flex-wrap: wrap;
	span {
		width: 100%;
	}
`;
