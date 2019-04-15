import styled from "styled-components";

export const Footer = styled.footer`
	background: ${props => props.theme.primary};
	text-align: center;
	color: white;
	font-weight: 600;
	padding: 12px;
	position: absolute;
	bottom: 0;
	width: 100%;
	box-shadow: 0px 0px 1px 1px ${props => props.theme.primaryDark};
`;
