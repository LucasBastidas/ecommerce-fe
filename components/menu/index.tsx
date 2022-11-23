import { TextButton } from "ui/buttons";
import { LargeText } from "ui/texts";
import { LogoutButton } from "./styled";
import Link from "next/link";

import styled from "styled-components";

export function Menu({ display }: any) {
	const StyledMenuRoot = styled.div`
		background-color: var(--azul-verdoso);
		color: white;
		display: ${display};
		flex-direction: column;
		align-items: center;
		position: absolute;
		top: 120px;
		width: 100%;
		height: calc(100vh - 120px);
		padding-top: 10%;
		justify-content: space-between;
	`;
	return (
		<StyledMenuRoot>
			<div>
				<Link href={"/signin"}>
					<TextButton>Ingresar</TextButton>
				</Link>
				<br />
				<TextButton>Buscar</TextButton>
				<br />
				<TextButton>Inicio</TextButton>
				<br />
				<TextButton>Ingresar</TextButton>
			</div>
			<div>
				<LargeText color="white">miemail@mail.com</LargeText>
				<LogoutButton>Cerrar sesión</LogoutButton>
			</div>
		</StyledMenuRoot>
	);
}
