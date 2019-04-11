import styled from "styled-components";
import { Button } from 'reactstrap';

export const Container = styled.div`
	// border: 1px solid black;
	color: ${props => props.theme.dark} ;
   
	p {
		color: ${props => props.theme.primaryDark};
		font-family: 'Fontdiner Swanky', cursive;
		font-size: 1.125rem;
	}

	img {
		margin-top: 20px;
		width: 75%
	}
	
`;


export const Btn = styled(Button)`
&& {background: ${props => props.theme.primary};}
`;



