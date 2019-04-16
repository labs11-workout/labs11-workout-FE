import styled from "styled-components";
import { Card, CardHeader, Form, Button} from "reactstrap";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
	margin-top: 2rem;
	width: 100%;
	display: flex;
	@media (max-width: 960px) {
		margin-top: 0;
		flex-wrap: wrap;
		h3 {
			display: none;
		}
		hr {
			display: none;
		}

	}
`;

export const AddContainer = styled.div`
	margin: 0;
	width: 100%;
	justify-content:center;
	hr{
		margin: 0;
	}
	@media (max-width: 960px) {
		margin-top: 0;
		flex-wrap: wrap;
		h3 {
			display: none;
		}
		hr {
			display: none;
		}

	}
`;


export const Measurements = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: 10px 0 0 0;
	h2{
		width:100%;
		text-align:center;
	}
	hr{
		width:100%;
	}
	h3 {
		width: 100%;
		margin: 4px;
	}
`;

export const Measurement = styled.div`
	position: relative;
	width: 25%;
	margin: 10px 0 0 0;
	@media (max-width: 590px) {
		width: 80%;
	}
	margin: 6px;

	p {
		padding: 0;
		margin: 0;
	}
`;

export const DeleteButton = styled.div`
	position: absolute;
	top: 3%;
	right: 2%;
	margin: 6px;
	color: ${props => props.theme.primary};

	&:hover {
		cursor: pointer;
	}
	i {
		font-size: 1.2rem;
	}
`;

export const UpdateButton = styled.div`
	position: absolute;
	top: 5%;
	left: 2%;
	margin: 6px;
	color: ${props => props.theme.primary};

	&:hover {
		cursor: pointer;
	}
	i {
		font-size: 1.2rem;
	}
`;

export const Workouts = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	h3 {
		width: 100%;
		margin: 4px;
	}
`;

export const Workout = styled.div`
	position: relative;
	width: 25%;
	margin: 6px;
	border: 1px solid black;
	border-radius: 6px;

	p {
		padding: 0;
		margin: 0;
	}
`;

export const ProgressCard = styled(Card)`
	&& {
		border-color: rgba(0, 0, 0, 0.3);
		box-shadow: 0px 1px 1px black;
	}
	width: 90%;
	margin: 16px auto;
	@media (max-width: 960px) {
		width: 95%;
	}
`;

export const Head = styled(CardHeader)`
	&& {
		padding: 18px;
		font-weight: 600;
	}
`;

export const CreationForm = styled(Form)`
	&& {
		box-shadow: 1px;
		margin: 0px 0px 0px 5%;
		width: 90%;
		.input-group {
			margin: 6px auto;
		}
		button{
			margin:20px 0 10px 0px;
			background: ${props => props.theme.secondary};
			border: none;
			/* box-shadow: 1px 1px 0px 1px ${props => props.theme.secondaryDark}; */
			&:hover {
			background: ${props => props.theme.secondaryLight};
			}
			&:active{
			background: ${props => props.theme.secondaryDark};
			}
			width: 99%
		}
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

export const Menu = styled.div`
	width: 15%;
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
    background: ${props => props.theme.secondaryDark};
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