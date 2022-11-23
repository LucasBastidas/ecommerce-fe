import { useState } from "react";
import { LoginRoot, FormRoot } from "./style";
import { TextField } from "ui/text-fields";
import { PrimaryButton } from "ui/buttons";
import { sendCode, getToken } from "lib/api";
import { useRouter } from "next/router";
export function LoginComp() {
	const [email, setEmail] = useState("");
	const [activeCodeForm, setActiveCodeForm] = useState(false);
	const [activeCodeError, setActiveCodeError] = useState(false);
	const [codeError, setCodeError] = useState("");

	const router = useRouter();

	function handleEmailForm(e: any) {
		e.preventDefault();
		const email = e.target.email.value;

		setEmail(email);
		if (email != "") {
			sendCode(email).then(() => {
				setActiveCodeForm(true);
			});
		}
	}

	function handleCodeForm(e: any) {
		e.preventDefault();
		const code = e.target.code.value;
		if (email != "") {
			getToken(email, code).then((r) => {
				if (r.status >= 400 && r.status <= 500) {
					setActiveCodeError(true);
					setCodeError(r.message);
				} else {
					router.push("/");
				}
			});
		}
	}

	return (
		<LoginRoot>
			<div style={activeCodeForm ? { display: "none" } : { display: "block" }}>
				<form onSubmit={handleEmailForm}>
					<FormRoot>
						<TextField
							placeHolder="email@email.com"
							type="email"
							title="Ingresa tu email"
							name="email"
						></TextField>
						<PrimaryButton>Siguiente</PrimaryButton>
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
						<PrimaryButton>Enviar</PrimaryButton>
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
