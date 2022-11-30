import styled from "styled-components";

export const PrimaryButton = styled.button`
	border: none;
	border-radius: 15px;
	background-color: var(--azul-oscuro);
	color: white;
	padding: 5px 25px;
	width: 100%;
	box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
	transition: all 0.3s ease 0s;
	cursor: pointer;
	outline: none;
	:hover {
		box-shadow: 0px 15px 20px var(--azul-oscuro);
		transform: translateY(-7px);
	}
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
	box-shadow: none;
	:hover {
		box-shadow: none;
		transform: none;
	}
`;
