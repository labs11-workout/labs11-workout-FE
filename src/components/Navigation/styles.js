import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
	background: #1a8fff;
	padding: 4px;
`;

export const Link = styled(NavLink)`
	position: relative;
	color: white;
	font-size: 20px;
	transition: all 0.3s;
	text-decoration: none;
	margin: 4px 8px;
	&::after {
		position: absolute;
		bottom: -4px;
		height: 2px;
		background: white;
		width: 0%;
		left: 0;
		content: "";
		transition: 0.3s all;
	}
	&:hover {
		text-decoration: none;
		color: white;
		cursor: pointer;
	}
	&:hover::after {
		width: 100%;
		background: white;
	}
	&.active::after {
		width: 100%;
	}
`;
