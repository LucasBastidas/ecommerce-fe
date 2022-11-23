import styled from "styled-components";

export const PrimaryButton = styled.button`
	border: none;
	border-radius: 15px;
	background-color: var(--azul-oscuro);
	color: white;
	padding: 5px 25px;
	width: 100%;
`;

export const SecondaryButton = styled(PrimaryButton)`
	background-color: var(--celeste-oscuro);
`;

export const AlternativeButton = styled(PrimaryButton)`
	background-color: var(--azul-verdoso);
`;

export const TextButton = styled(PrimaryButton)`
	background-color: transparent;
	padding: none;
	font-size: 24px;
`;
