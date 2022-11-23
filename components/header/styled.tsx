import styled from "styled-components";

export const HeaderRoot = styled.header`
	width: 100%;
	height: 120px;
	display: flex;
	background-color: var(--azul-oscuro);
	justify-content: space-between;
	align-items: center;
	position: fixed;
	padding: 0 20px;
`;

export const ActiveOrInactiveMenu = styled.div`
	position: absolute;
	display: none;
	width: 100%;
	height: calc(100vh - 120px);
`;
