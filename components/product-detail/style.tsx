import styled from "styled-components";

export const ProductDetailRoot = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	gap: 90px;
	height: 80vh;
	padding: 0 50px;
	justify-content: center;
	@media (min-width: 720px) {
		flex-direction: row;
		gap: 40px;
		align-items: center;
	}
`;

export const TitleAndPriceCont = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	text-align: center;
	gap: 25px;
`;

export const ImgCont = styled.div`
	margin: 0 auto;
	width: 250px;
	height: 200px;
	@media (min-width: 720px) {
		width: 400px;
		height: 350px;
	}
`;
