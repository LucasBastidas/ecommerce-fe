import { useMe } from "hooks/me";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ProfileRoot, RootGral } from "./style";
import { useForm } from "react-hook-form";
import { LoaderBig } from "ui/loader";
import { MyDataForm } from "components/forms";
import { udpateOrConfirmMyData } from "lib/api";
import { PrimaryButton } from "ui/buttons";
import { Subtitle } from "ui/texts";
import Head from "next/head";

export function ProfileComp() {
	var myData = useMe();
	const router = useRouter();
	const [errorActive, setError] = useState(false);
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = (data: any) => {
		console.log(data);
		const cleanData = {
			name: data.nombre_completo,
			tel: data.numero_telefono,
			address: {
				provincia: data.provincia,
				ciudad: data.ciudad,
				direccion: {
					calle: data.calle,
					altura: data.altura,
				},
			},
		};

		udpateOrConfirmMyData(cleanData).then((r) => {
			if (r == null) {
				alert("Se produjo un error, intentalo mas tarde");
				//te llevo a la home
			} else {
				alert("ok");
			}
		});
	};
	function handleSignInButton() {
		router.push("/signin");
	}

	return (
		<RootGral>
			<Head>
				<title>Tu perfil</title>
			</Head>
			<ProfileRoot>
				{myData == null ? (
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							gap: "25px",
						}}
					>
						<Subtitle>No estas logeado</Subtitle>
						<PrimaryButton onClick={handleSignInButton}>
							Iniciar Sesión
						</PrimaryButton>
					</div>
				) : myData == undefined ? (
					<div>
						<LoaderBig />
					</div>
				) : (
					<div>
						<MyDataForm onSubmit={onSubmit} />
					</div>
				)}
			</ProfileRoot>
		</RootGral>
	);
}
