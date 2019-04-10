import styled from "styled-components";
import {
	CardHeader,
	CardBody,
	Button,
	Card,
	DropdownToggle,
	Dropdown,
	DropdownItem,
	NavLink
} from "reactstrap";

export const DaySchedule = styled.div`
	position: relative;
	background: ${props => props.theme.primary};
	color: #eee;
	width: 100%;
	margin: 2px auto;
	padding: 6px;
	text-align: center;
	border-radius: 4px;
	transition: all 0.3s;
	&:hover {
		background: ${props => props.theme.primaryDark};
		cursor: pointer;
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

export const TabLink = styled(NavLink)`
	&& {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export const SettingsButton = styled(DropdownToggle)`
	&& {
	}
`;

export const CloseButton = styled.span`
	position: absolute;
	top: 12px;
	right: 12px;
	font-size: 20px;
	transition: 0.4s all;
	&:hover {
		color: red;
		cursor: pointer;
	}
`;

export const BackButton = styled.span`
	position: absolute;
	top: 4px;
	left: 12px;
	font-size: 14px;
	transition: 0.4s all;
	&:hover {
		color: ${props => props.theme.primary};
		cursor: pointer;
	}
`;

export const DeleteButton = styled.span`
	position: absolute;
	right: 12px;
	top: 2px;
	font-size: 20px;
	transition: 0.4s all;
	color: rgba(255, 0, 0, 0.5);
	&:hover {
		color: rgba(255, 0, 0, 0.7);
		cursor: pointer;
	}
`;

export const AddWorkout = styled.div`
	display: flex;
	width: 100%;
	margin-bottom: 6px;
	flex-wrap: wrap;
	.input-group {
		width: 50%;
		@media (max-width: 991px) {
			width: 100%;
		}
	}
	button {
		flex-grow: 1;
		margin: 0 4px;
		box-shadow: 0px 1px 2px black;
		@media (max-width: 991px) {
			width: 100%;
			margin: 4px 0;
		}
	}
`;

export const CardHead = styled(CardHeader)`
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

export const DeleteWorkout = styled(Button)`
	&& {
		transition: 0.4s all;
		color: #dc3545;
		border-color: #dc3545;
		background: white;
		&:hover {
			color: white;
			background: #dc3545;
			border-color: #dc3545;
		}
		&&:active {
			color: white;
			background: #a71d2a;
			border-color: #a71d2a;
		}
	}
`;

export const CompletedExercise = styled.div`
	i {
		transition: 0.4s all;
		font-size: 22px;
		&.not-completed {
			color: #dc3545;
		}
		&.not-completed:hover {
			cursor: pointer;
			color: #28a745;
		}

		&.completed {
			color: #28a745;
		}
		&.completed:hover {
			cursor: pointer;
			color: #dc3545;
		}
	}
`;

export const NestedCard = styled(Card)`
	&& {
		width: 100%;
		padding: 0;
		box-shadow: 0px 0px 1px black;
		margin: 6px auto;
	}
`;
