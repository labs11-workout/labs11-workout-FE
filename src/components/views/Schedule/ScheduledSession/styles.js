import styled from "styled-components";

export const DaySchedule = styled.div`
	position: relative;
	background: #1a8fff;
	color: black;
	width: 100%;
	margin: 2px auto;
	padding: 6px;
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

export const DeleteButton = styled.span`
	position: absolute;
	right: 12px;
	top: 2px;
	font-size: 20px;
	transition: 0.4s all;
	color: rgba(255, 0, 0, 0.5);
	&:hover {
		color: rgba(255, 0, 0, 0.7);
		cursor: pointer;
	}
`;
