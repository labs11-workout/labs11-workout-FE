import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {
	Card,
	CardHeader,
	CardBody,
	Button,
	DropdownToggle,
	Dropdown,
	DropdownItem,
	Modal
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
	&& {
		padding: 6px;
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

export const DeleteButton = styled(Button)`
	&& {
		margin: 8px;
	}
`;
