import styled from "styled-components";

import {
	Card,
	CardHeader,
	CardBody,
	Button,
	DropdownToggle,
	DropdownItem,
	Form
} from "reactstrap";

export const WorkoutCard = styled(Card)`
	&& {
		border-color: rgba(0, 0, 0, 0.3);
		box-shadow: 0px 1px 2px black;
	}
	width: 30%;
	margin: 16px auto;
	@media (max-width: 960px) {
		width: 95%;
	}
`;

export const NestedCard = styled(Card)`
	&& {
		width: 100%;
		padding: 0;
	}
`;

export const CardHead = styled(CardHeader)`
	position: relative;
	display: flex;
	justify-content: space-between;
	span {
		transition: 0.4s all;
	}
	span.active {
		color: #1a8fff;
	}
	span:hover {
		cursor: pointer;
		color: #1a8fff;
	}
`;

export const CardMain = styled(CardBody)`
	display: flex;
	flex-wrap: wrap;
	span {
		width: 100%;
	}
`;

export const SettingButton = styled(DropdownToggle)`
	position: absolute;
	right: 12px;
	top: -36px;
	&.exercise {
		top: -8px;
	}
	&& {
		padding: 6px;
		background: ${props => props.theme.secondary};
		border: none;
		color: white;
		&:hover {
			background: ${props => props.theme.secondaryLight};
			color: white;
		}
		&:active {
			background: ${props => props.theme.secondaryDark};
			color: white;
		}
	}
`;

export const DropdownItemDanger = styled(DropdownItem)`
	&& {
		transition: 0.4s all;
		color: white;
		background: #dc3545;
		&:hover {
			background: #ba3545;
			color: white;
		}
	}
`;

export const CreateButton = styled(Button)`
	&& {
		box-shadow: 1px 1px 1px 1px ${props => props.theme.secondaryDark};
		background: ${props => props.theme.secondary};
		border: none;
		&:hover {
			background: ${props => props.theme.secondaryLight};
		}
		&:active {
			background: ${props => props.theme.secondaryDark};
		}
	}
`;

export const DeleteButton = styled(Button)`
	&& {
		margin: 8px;
		background: ${props => props.theme.primary};
		&:hover {
		background: ${props => props.theme.primaryDark};
		}
		&:active{
		background: ${props => props.theme.primaryDark};
		}
	}
`;

export const UpdateWorkout = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	button {
		width: 100%;
		margin: 4px auto;
		box-shadow: 0px 1px 2px black;
		background: ${props => props.theme.secondary};
		border: none;
	}
`;

export const ExercisesHeader = styled.div`
	position: relative;
	margin-top: 32px;
	button {
		position: absolute;
		right: 0;
		top: -6px;
		padding: 4px;
	}
`;

export const CreationForm = styled(Form)`
	&& {
		.input-group {
			margin: 6px auto;
		}
		button {
			width: 100%;
		}
	}
`;

export const SecondaryButton = styled(Button)`
	&& {
		background: ${props => props.theme.secondary};
		border: none;
		color: white;
		&:hover {
			background: ${props => props.theme.secondaryLight};
			color: white;
		}
		&:active {
			background: ${props => props.theme.secondaryDark};
		}
	}
`;
