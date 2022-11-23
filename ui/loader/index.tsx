import styled from "styled-components";

export const LoaderSmall = styled.div`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	border: 8px solid;
	border-color: var(--azul-oscuro) #0000;
	animation: loader 1s infinite;
`;

export const LoaderBig = styled(LoaderSmall)`
	width: 150px;
	height: 150px;
`;
