import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
	position: relative;
	background: #1a8fff;
	padding: 4px;
`;

export const Links = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	@media (max-width: 640px) {
		flex-direction: column;
		display: none;
		&.open {
			display: flex;
		}
	}
`;

export const NavToggle = styled.div`
	width: 100%;
	text-align: right;
	color: white;
	font-size: 32px;
	display: none;
	padding-right: 32px;
	i:hover {
		cursor: pointer;
	}
	@media (max-width: 640px) {
		display: block;
	}
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
		transition: 0.4s all;
		@media (max-width: 640px) {
			left: 33%;
			max-width: 33%;
			transition: 1s all;
			text-align: center;
		}
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
