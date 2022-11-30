import styled from "styled-components";

export const CheckoutRoot = styled.div`
	padding-top: 120px;
	display: flex;
	text-align: center;
	min-height: 100vh;
	flex-direction: column;
	align-items: center;
	width: 100%;
	background-color: var(--celeste-claro);
`;

export const FormCont = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	padding-left: 10px;
	padding-right: 10px;
	width: 100%;
	margin: 0 auto;
	padding-top: 10%;
	@media (min-width: 1280px) {
		padding-top: 10%;
		width: 450px;
	}
`;

export const AbsoluteLoader = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: fixed;
	width: 100%;
	height: 100%;
	background-color: var(--celeste-medio);
`;
