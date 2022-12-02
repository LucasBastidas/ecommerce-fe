import styled from "styled-components";

export const RootGral = styled.div`
	background-color: var(--celeste-claro);
`;

export const ProfileRoot = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	width: 300px;
	margin: 0 auto;
	padding-top: 5%;
	background-size: 40px 40px;
	@media (min-width: 1280px) {
		padding-top: 5%;
		width: 450px;
	}
`;

export const ErrorInputCont = styled.div`
	color: red;
	padding: 5px;
	width: 100%;
`;
