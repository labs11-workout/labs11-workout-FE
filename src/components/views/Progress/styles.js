import styled from "styled-components";
import { Card, CardHeader, Form, Button} from "reactstrap";

export const Container = styled.div`
	width: 100%;
`;

export const Measurements = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: 10px 0 0 0;

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
	};
	margin: 6px;


	p {
		padding: 0;
		margin: 0;
	}
`;

export const DeleteButton = styled.div`
	position: absolute;
	top: 5%;
	right: 2%;
	margin: 6px;
	color: ${props => props.theme.primary};

	&:hover {
		cursor: pointer;
	}
	i{
		font-size:1.2rem;
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
	i{
		font-size:1.2rem;
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
&&{
	padding:18px;
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
		
		margin: 10px 0px 0px 0px;
		background: ${props => props.theme.secondary};
		border: none;
		/* box-shadow: 1px 1px 0px 1px ${props => props.theme.secondaryDark}; */
		&:hover {
		background: ${props => props.theme.secondaryLight};
		}
		&:active{
		background: ${props => props.theme.secondaryDark};
		}
	}
`;

