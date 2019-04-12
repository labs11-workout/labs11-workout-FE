import styled, { keyframes } from "styled-components";
import { Button } from "reactstrap";

export const Container = styled.div`
	p {
		color: ${props => props.theme.dark};
		/* font-family: "Fontdiner Swanky", cursive; */
		width: 65%;
		font-size: 1.125rem;
		margin: 0 auto;
		padding: 0;
		@media (max-width: 600px) {
			width: 95%;
		}
	}

	img {
		margin-top: 20px;
		width: 35%;
		@media (max-width: 600px) {
			width: 75%;
		}
	}
`;

const hover = keyframes`
	0% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
	}
	50% {
		box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
		transform: translatey(-20px);
	}
	100% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
	}
`;

export const Btn = styled(Button)`
	&& {
		background: ${props => props.theme.primary};
		padding: 24px;
		width: 325px;
		box-shadow: 0px 0px 1px black;
		transition: all 0.4s;
		font-size: 1.25rem;
		animation: ${hover} 6s ease-in-out infinite;
		&:hover {
			background: ${props => props.theme.primaryLight};
			box-shadow: 0px 0px 3px black;
		}
	}
`;
