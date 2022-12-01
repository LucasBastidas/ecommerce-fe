import { useEffect, useState } from "react";
import { LoginRoot, FormRoot, LoaderCont } from "./style";
import { TextField } from "ui/text-fields";
import { PrimaryButton } from "ui/buttons";
import { sendCode, getToken } from "lib/api";
import { useRouter } from "next/router";
import { LoaderSmall } from "ui/loader";
import { useMe } from "hooks/me";
import Head from "next/head";
export function LoginComp() {
	const [email, setEmail] = useState("");
	const [activeCodeForm, setActiveCodeForm] = useState(false);
	const [activeCodeError, setActiveCodeError] = useState(false);
	const [codeError, setCodeError] = useState("");
	const [activeLoader, setActiveLoader] = useState(false);

	const router = useRouter();

	var myData = useMe();

	useEffect(() => {
		if (myData) {
			router.push("/");
		}
	}, [myData]);

	function handleEmailForm(e: any) {
		e.preventDefault();
		const email = e.target.email.value;

		setEmail(email);
		if (email != "") {
			setActiveLoader(true);
			sendCode(email).then(() => {
				setActiveCodeForm(true);
				setActiveLoader(false);
			});
		}
	}

	function handleCodeForm(e: any) {
		e.preventDefault();
		const code = e.target.code.value;
		if (email != "") {
			getToken(email, code).then((r) => {
				setActiveLoader(true);
				if (r.status >= 400 && r.status <= 500) {
					setActiveLoader(false);
					setActiveCodeError(true);
					setCodeError(r.message);
				} else {
					setActiveLoader(false);
					router.push("/");
				}
			});
		}
	}

	return (
		<LoginRoot>
			<Head>
				<title>Iniciar Sesión</title>
			</Head>
			<div style={activeCodeForm ? { display: "none" } : { display: "block" }}>
				<form onSubmit={handleEmailForm}>
					<FormRoot>
						<TextField
							placeHolder="email@email.com"
							type="email"
							title="Ingresa tu email"
							name="email"
						></TextField>
						<div
							style={
								activeLoader
									? { display: "none" }
									: { display: "flex", width: "100%" }
							}
						>
							<PrimaryButton>Siguiente</PrimaryButton>
						</div>
						<div
							style={activeLoader ? { display: "block" } : { display: "none" }}
						>
							<LoaderCont>
								<LoaderSmall></LoaderSmall>
							</LoaderCont>
						</div>
					</FormRoot>
				</form>
			</div>
			<div style={activeCodeForm ? { display: "block" } : { display: "none" }}>
				<form onSubmit={handleCodeForm}>
					<FormRoot>
						<TextField
							placeHolder="1234"
							type="number"
							title="Revisa tu email e ingresa el codigo"
							name="code"
						></TextField>
						<div
							style={
								activeLoader
									? { display: "none" }
									: { display: "flex", width: "100%" }
							}
						>
							<PrimaryButton>Enviar</PrimaryButton>
						</div>
						<div
							style={activeLoader ? { display: "block" } : { display: "none" }}
						>
							<LoaderCont>
								<LoaderSmall></LoaderSmall>
							</LoaderCont>
						</div>
					</FormRoot>
				</form>
				<div
					style={activeCodeError ? { display: "block" } : { display: "none" }}
				>
					<p color="red">{codeError}</p>
				</div>
			</div>
		</LoginRoot>
	);
}
