import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
	border: 1px solid red;
`;

export const Link = styled(NavLink)`
	color: black;
	text-decoration: underline;
	font-size: 20px;
	transition: all 0.3s;
	margin: 4px;
	&:hover {
		transform: scale(1.1);
	}
`;
