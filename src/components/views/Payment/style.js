import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

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

export const PCard = styled(Card)`
	display: flex;
	width: 100%;
	padding: 10px;
	margin: 12px auto;
`;

export const PCardBody = styled(CardBody)`
	color: black;
	margin: 12px auto;
`;

export const SettingsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;
`;

export const Image = styled.div`
	img {
		display: flex;
		margin: 0 auto;
		margin-top: 20px;
		width: 65%;
		height: 250px;
	}
`;
