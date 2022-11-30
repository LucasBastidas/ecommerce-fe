import { useMe, useUpdateOrConfirmMyData } from "hooks/me";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ProfileRoot, RootGral } from "./style";
import { useForm } from "react-hook-form";
import { LoaderBig } from "ui/loader";
import { MyDataForm } from "components/forms";

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

		useUpdateOrConfirmMyData(cleanData).then((r) => {
			if (r == null) {
				alert("Se produjo un error, intentalo mas tarde");
				//te llevo a la home
			} else {
				alert("ok");
			}
		});
	};
	// ;
	// opacity: "0.8";
	// backgroundImage: "radial-gradient(
	// 	var(--azul-oscuro) 2px,
	// 	var(--celeste-claro) 2px
	// )";}
	return (
		<RootGral>
			<ProfileRoot>
				{myData == undefined ? (
					<div>
						<LoaderBig />
					</div>
				) : myData == null ? (
					<div>No estas Logeado</div>
				) : (
					<div>
						<MyDataForm onSubmit={onSubmit} />
					</div>
				)}
			</ProfileRoot>
		</RootGral>
	);
}