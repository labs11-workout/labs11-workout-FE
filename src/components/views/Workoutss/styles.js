import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
	width: 100%;
	display: flex;
	@media (max-width: 960px) {
		flex-wrap: wrap;
	}
`;

export const Menu = styled.div`
	width: 20%;
	padding: 12px;
	display: flex;
	flex-direction: column;
	@media (max-width: 960px) {
		width: 100%;
	}
`;

export const MenuLink = styled(NavLink)`
	width: 100%;
	background: #ccc;
	color: black;
	padding: 4px;
	border-radius: 4px;
	text-decoration: none;
	transition: 0.4s all;
	margin: 6px auto;
	&:visited {
		text-decoration: none;
	}
	&:hover {
		text-decoration: none;
		background: #1a8fff;
		color: white;
	}
	&.active {
		background: #1a8fff;
		color: white;
	}
	@media (max-width: 960px) {
		width: 50%;
	}
`;

export const Content = styled.div`
	width: 80%;
	margin: 0 auto;
	@media (max-width: 960px) {
		width: 100%;
	}
`;
