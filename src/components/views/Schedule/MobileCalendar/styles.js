import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
`;

export const Header = styled.div`
	position: relative;
	width: 100%;
	padding: 12px;
	border: 1px solid #ccc;
`;

export const Next = styled.div`
	position: absolute;
	right: 5px;
	top: 25%;
	font-size: 22px;
	transition: all 0.3s;
	&:hover {
		color: rgb(26, 143, 255);
		cursor: pointer;
	}
`;

export const Previous = styled.div`
	position: absolute;
	left: 5px;
	top: 25%;
	font-size: 22px;
	transition: all 0.3s;
	&:hover {
		color: rgb(26, 143, 255);
		cursor: pointer;
	}
`;

export const Day = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	border: 1px solid #ccc;
	padding: 6px;

	&:hover {
		.DayHeader {
			color: #1a8fff90;
		}

		.selected {
			color: #1a8fff;
		}
	}
`;

export const DayHeader = styled.div`
	position: relative;
	width: 100%;
	text-align: right;
	font-size: 18px;
	color: rgba(0, 0, 0, 0.5);
	transition: all 0.3s;

	&.selected {
		color: #1a8fff;
	}
`;

export const DayCell = styled.div`
	width: 100%;
	font-size: 16px;
	padding: 6px;
	min-height: 32px;
`;

export const DaySchedule = styled.div`
	background: #1a8fff;
	color: black;
	width: 95%;
	margin: 2px auto;
	padding: 4px;
	text-align: center;
	border-radius: 4px;
	transition: all 0.3s;
	&:hover {
		background: #349dff;
		cursor: pointer;
	}
`;

export const EmptyDay = styled.span`
	color: rgba(0, 0, 0, 0.5);
`;
