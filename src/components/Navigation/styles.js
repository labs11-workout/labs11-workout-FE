import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";

export const Container = styled.div`
	position: relative;
	background: ${props => props.theme.primary};
	padding: 4px;
	box-shadow: 1px 1px 1px 1px ${props => props.theme.primaryDark};
`;

export const Content = styled.div`
	display: flex;
	justify-content: space-between;
	max-width: 1140px;
	margin: 0 auto;
	.logout-link {
		width: 20%;
		display: flex;
		justify-content: flex-end;
		@media (max-width: 640px) {
			width: 100%;
			justify-content: center;
			display: none;
		}
	}
	.image {
		width: 20%;
		display: flex;
		justify-content: flex-start;
		@media (max-width: 640px) {
			display: none;
		}
	}
	@media (max-width: 640px) {
		display: flex;
		flex-direction: column;
	}
`;

export const Links = styled.div`
	display: flex;
	@media (max-width: 640px) {
		flex-direction: column;
		display: none;
		width: 100%;
		&.open {
			display: flex;
		}
	}
`;

export const NavToggle = styled.div`
	text-align: left;
	color: ${props => props.theme.lightFont};
	font-size: 32px;
	display: none;
	padding-left: 32px;
	width: 100%;
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
	align-self: center;
	&.no-underline {
		&::after {
			display: none;
		}
	}
	&.logout {
		display: none;
		&::after {
			display: none;
		}
		@media (max-width: 640px) {
			display: inline-block;
		}
	}
	&::after {
		position: absolute;
		bottom: -2px;
		height: 2px;
		background: ${props => props.theme.lightFont};
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

export const AddButton = styled(Button)`
	&& {
		margin: 0 0px 0px 0px;
		background: ${props => props.theme.secondary};
		border: none;
		box-shadow: 1px 1px 0px 1px ${props => props.theme.secondaryDark};
		&:hover {
			background: ${props => props.theme.secondaryLight};
		}
		&:active {
			background: ${props => props.theme.secondaryDark};
		}
	}
`;
