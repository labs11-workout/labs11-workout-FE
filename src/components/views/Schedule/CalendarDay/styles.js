import styled from "styled-components";

export const Container = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	content: " ";
`;

export const EmptyDay = styled.span`
	color: rgba(0, 0, 0, 0.5);
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
