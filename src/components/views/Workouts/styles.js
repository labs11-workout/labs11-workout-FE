import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
	width: 100%;
	display: flex;
	@media (max-width: 960px) {
		flex-wrap: wrap;
		h3 {
			display: none;
		}
		hr {
			display: none;
		}
	}
`;

export const Menu = styled.div`
	width: 20%;
	padding: 12px;
	display: flex;
	flex-direction: column;
	@media (max-width: 960px) {
		width: 100%;
		flex-direction: row;
		padding: 0;
		margin: 0;
	}
`;

export const MenuLink = styled(NavLink)`
	width: 100%;
	background: rgba(0, 0, 0, 0.025);
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
		background: ${props => props.theme.secondaryLight};
		color: white;
	}
	&.active {
		background: ${props => props.theme.secondary};
		color: white;
	}
	@media (max-width: 960px) {
		width: 50%;
		margin: 0 auto;
		border-radius: 0;
		padding: 12px;
		outline: 1px solid rgba(0, 0, 0, 0.3);
	}
`;

export const Content = styled.div`
	width: 80%;
	margin: 0 auto;
	@media (max-width: 960px) {
		width: 100%;
	}

	img {
		margin-top: 20px;
		width: 200px;
	}
`;
