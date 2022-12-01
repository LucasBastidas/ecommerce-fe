import { TextButton, AlternativeButton } from "ui/buttons";
import { LargeText } from "ui/texts";
import {
	LogoutButton,
	StyledMenuDesktopRoot,
	LogoutButtonCont,
} from "./styled";
import Link from "next/link";
import styled from "styled-components";
import { useMe } from "hooks/me";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export function Menu({ display, closeMenu }: any) {
	const StyledMenuRoot = styled.div`
		background-color: var(--azul-verdoso);
		color: white;
		display: ${display};
		flex-direction: column;
		align-items: center;
		position: fixed;
		top: 120px;
		width: 100%;
		height: calc(100vh - 120px);
		padding-top: 10%;
		justify-content: space-between;
	`;
	const [token, setToken] = useState("");
	const [logged, setLogged] = useState(false);
	const router = useRouter();
	var myData = useMe();

	useEffect(() => {
		if (myData) {
			console.log("estoy logeado");
			setLogged(true);
		} else {
			setLogged(false);
		}
	}, [myData]);

	console.log({ myData });

	function handleCloseSesion() {
		router.push("/logout");
	}

	return (
		<StyledMenuRoot>
			<div>
				<div style={logged ? { display: "none" } : { display: "initial" }}>
					<Link href="/signin">
						<TextButton>Ingresar</TextButton>
					</Link>
				</div>
				<br />
				<Link href="/">
					<TextButton>Buscar</TextButton>
				</Link>
				<br />
				<Link onClick={closeMenu} href={"/"}>
					<TextButton>Inicio</TextButton>
				</Link>
				<br />
				<div style={logged ? { display: "initial" } : { display: "none" }}>
					<Link href="/profile">
						<TextButton>Mi perfil</TextButton>
					</Link>
				</div>
			</div>
			<div style={logged ? { display: "block" } : { display: "none" }}>
				<LargeText color="white">{myData?.email}</LargeText>
				<LogoutButton onClick={handleCloseSesion}>Cerrar sesión</LogoutButton>
			</div>
		</StyledMenuRoot>
	);
}

export function MenuDesktop() {
	const [logged, setLogged] = useState(false);
	var myData = useMe();
	const router = useRouter();

	useEffect(() => {
		if (myData) {
			console.log("SOY MENU DESKTOP");
			setLogged(true);
		} else {
			setLogged(false);
		}
	}, [myData]);

	console.log({ myData });

	function handleCloseSesion() {
		router.push("/logout");
	}

	return (
		<StyledMenuDesktopRoot>
			<div style={logged ? { display: "none" } : { display: "initial" }}>
				<Link href="/signin">
					<AlternativeButton>Ingresar</AlternativeButton>
				</Link>
			</div>
			<div style={logged ? { display: "block" } : { display: "none" }}>
				<div style={{ backgroundColor: "var(--celeste-claro)" }}>
					<Link href="/profile">
						<LargeText>{myData?.email}</LargeText>
					</Link>
				</div>
				<LogoutButtonCont>
					<LogoutButton onClick={handleCloseSesion}>Cerrar sesión</LogoutButton>
				</LogoutButtonCont>
			</div>
		</StyledMenuDesktopRoot>
	);
}
