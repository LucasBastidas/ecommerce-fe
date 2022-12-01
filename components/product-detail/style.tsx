import styled from "styled-components";

export const ProductDetailRoot = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	gap: 90px;
	height: 80vh;
	padding: 0 50px;
	justify-content: center;
	align-items: center;
	@media (min-width: 1280px) {
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
	@media (min-width: 1280px) {
		width: 400px;
		height: 350px;
	}
`;

export const PopUpWindowRoot = styled.div`
	display: flex;
	color: white;
	text-align: "center";
	flex-direction: column;
	align-items: center;
	gap: 40px;
	background-color: #1670bee8;
	justify-content: center;
	position: fixed;
	top: 40%;
	height: 50vh;
	width: 100%;
	padding: 0 25px;
`;
