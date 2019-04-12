import React from "react";
import styled, { withTheme } from "styled-components";

const Loading = props => {
	return (
		<Container>
			<div className="lds-default">
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
			</div>
		</Container>
	);
};

const Container = styled.div`
	position: absolute;
	display: flex;
	height: 100vh;
	margin: 0 auto;
	left: 0;
	right: 0;
	.lds-default {
		top: 30%;
		margin: 0 auto;
		display: inline-block;
		position: relative;
		width: 64px;
		height: 64px;
		transform: scale(2);
	}
	.lds-default div {
		position: absolute;
		width: 5px;
		height: 5px;
		background: ${props => props.theme.primary};
		border-radius: 50%;
		animation: lds-default 1.2s linear infinite;
	}
	.lds-default div:nth-child(1) {
		animation-delay: 0s;
		top: 29px;
		left: 53px;
	}
	.lds-default div:nth-child(2) {
		animation-delay: -0.1s;
		top: 18px;
		left: 50px;
	}
	.lds-default div:nth-child(3) {
		animation-delay: -0.2s;
		top: 9px;
		left: 41px;
	}
	.lds-default div:nth-child(4) {
		animation-delay: -0.3s;
		top: 6px;
		left: 29px;
	}
	.lds-default div:nth-child(5) {
		animation-delay: -0.4s;
		top: 9px;
		left: 18px;
	}
	.lds-default div:nth-child(6) {
		animation-delay: -0.5s;
		top: 18px;
		left: 9px;
	}
	.lds-default div:nth-child(7) {
		animation-delay: -0.6s;
		top: 29px;
		left: 6px;
	}
	.lds-default div:nth-child(8) {
		animation-delay: -0.7s;
		top: 41px;
		left: 9px;
	}
	.lds-default div:nth-child(9) {
		animation-delay: -0.8s;
		top: 50px;
		left: 18px;
	}
	.lds-default div:nth-child(10) {
		animation-delay: -0.9s;
		top: 53px;
		left: 29px;
	}
	.lds-default div:nth-child(11) {
		animation-delay: -1s;
		top: 50px;
		left: 41px;
	}
	.lds-default div:nth-child(12) {
		animation-delay: -1.1s;
		top: 41px;
		left: 50px;
	}
	@keyframes lds-default {
		0%,
		20%,
		80%,
		100% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.5);
		}
	}
`;

export default withTheme(Loading);
