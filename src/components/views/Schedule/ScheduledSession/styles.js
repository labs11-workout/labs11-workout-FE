import styled from "styled-components";

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

export const CloseButton = styled.span`
	position: absolute;
	top: 12px;
	right: 12px;
	font-size: 20px;
	transition: 0.4s all;
	&:hover {
		color: red;
		cursor: pointer;
	}
`;
