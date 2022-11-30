import styled from "styled-components";

export const ProductCardRoot = styled.div`
	display: flex;
	flex-direction: column;
	width: 350px;
	height: 450px;
	background-color: var(--celeste-claro);
	margin: 0px;
	border-radius: 25px;
	box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
		rgba(0, 0, 0, 0.22) 0px 15px 12px;
	transition: all 0.5s;
	:hover {
		box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
			rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
			rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
	}
	@media (min-width: 1280px) {
		width: 400px;
	}
`;

export const TextAndButtonRoot = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 35px 10px;
	border-top: solid;
`;
