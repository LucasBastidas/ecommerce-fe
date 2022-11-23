import Hamburger from "public/menu.svg";
import styled from "styled-components";
import CarritoSVG from "public/shopping-cart.svg";

export const MenuIcon = styled(Hamburger)`
	width: 50px;
	stroke: var(--celeste-claro);
	cursor: pointer;
	@media (min-width: 720px) {
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
