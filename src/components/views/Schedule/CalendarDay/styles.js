import styled from "styled-components";
import { Alert, Button } from "reactstrap";

export const Container = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	content: " ";
`;

export const EmptyDay = styled.span`
	color: rgba(0, 0, 0, 0.5);
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

export const AddSchedule = styled.div`
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
		@media (max-width: 991px) {
			width: 100%;
			margin: 4px 0;
		}
	}
`;

export const AlertBox = styled(Alert)`
	text-align: center;
	&:hover {
		cursor: pointer;
	}
`;

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

export const SecondaryButton = styled(Button)`
	&& {
		background: ${props => props.theme.secondary};
		&:hover {
			background: ${props => props.theme.secondaryDark};
		}
		&:active {
			background: ${props => props.theme.secondaryDark};
		}
	}
`;

export const HelperText = styled.span`
	color: black;
	opacity: 0.5;
	width: 100%;
	text-align: center;
	i {
		opacity: 1;
	}
`;
