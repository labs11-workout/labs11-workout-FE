import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	@media (min-width: 601px) {
		display: none;
	}
`;

export const Header = styled.div`
	position: relative;
	width: 100%;
	padding: 3px;
	border: 1px solid #ccc;
`;

export const Next = styled.div`
	top: 4px;
	position: absolute;
	right: 5px;
	font-size: 22px;
	transition: all 0.3s;
	&:hover {
		color: ${props => props.theme.primary};
		cursor: pointer;
	}
`;

export const Previous = styled.div`
	position: absolute;
	left: 5px;
	font-size: 22px;
	transition: all 0.3s;
	&:hover {
		color: ${props => props.theme.primary};
		cursor: pointer;
	}
`;

export const Day = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	border: 1px solid #ccc;
	padding: 6px;
	@media (min-height: 655px) {
		height: calc(100vh / 8.33);
	}
	flex-grow: 1;
	&:hover {
		.DayHeader {
			color: ${props => props.theme.primaryLight};
		}

		.selected {
			color: ${props => props.theme.primary};
		}
	}
`;

export const Days = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
`;

export const DayHeader = styled.div`
	position: relative;
	width: 100%;
	text-align: left;
	font-size: 18px;
	color: rgba(0, 0, 0, 0.5);
	transition: all 0.3s;

	&.selected {
		color: ${props => props.theme.primary};
	}
`;

export const DayCell = styled.div`
	width: 100%;
	font-size: 16px;
	padding: 6px;
	min-height: 32px;
`;

export const TodayLabel = styled.span`
	position: absolute;
	opacity: 0.6;
	right: 0;
`;
