import Hamburger from "public/menu.svg";
import styled from "styled-components";
import CarritoSVG from "public/shopping-cart.svg";
import Facebook from "public/facebook.svg";
import Twitter from "public/twitter.svg";
import Instagram from "public/instagram.svg";

export const MenuIcon = styled(Hamburger)`
	width: 50px;
	stroke: var(--celeste-claro);
	cursor: pointer;
	@media (min-width: 1280px) {
		display: none;
	}
`;

export const CarritoGrande = styled(CarritoSVG)`
	width: 50px;
	height: 50px;
	stroke: var(--celeste-claro);
`;

export const LogoCompletoRoot = styled.div`
	display: flex;
	gap: 10px;
	align-items: center;
	cursor: pointer;
`;

export function LogoCompleto({ onClick }: any) {
	return (
		<LogoCompletoRoot onClick={onClick}>
			<CarritoGrande />
			<h2
				style={{
					color: "var(--celeste-claro)",
					fontSize: "20px",
					fontWeight: "bold",
				}}
			>
				Tienda YA
			</h2>
		</LogoCompletoRoot>
	);
}

export const FacebookLogo = styled(Facebook)`
	width: 15px;
	height: 15px;
	stroke: var(--celeste-claro);
`;

export const TwitterLogo = styled(Twitter)`
	width: 15px;
	height: 15px;
	stroke: var(--celeste-claro);
`;
export const InstagramLogo = styled(Instagram)`
	width: 15px;
	height: 15px;
	stroke: var(--celeste-claro);
`;
