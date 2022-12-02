import { useMe } from "hooks/me";
import { useState } from "react";
import { ErrorInputCont } from "./style";
import { useForm } from "react-hook-form";
import { LargeText, Subtitle } from "ui/texts";
import { InputSmall } from "ui/text-fields";
import { PrimaryButton } from "ui/buttons";

export function MyDataForm({ onSubmit }: any) {
	const onlyStringPattern = /^[a-zA-ZÀ-ÿ \u00f1\u00d1 a x]{4,20}$/;
	const stringAndNumbersPattern = /^[a-zA-Z0-9-ZÀ-ÿ \u00f1\u00d1 a x]{4,20}$/;
	var myData = useMe();
	const [errorActive, setError] = useState(false);
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	return (
		<div
			style={{
				width: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<Subtitle>Tus datos</Subtitle>
			<br />
			<br />
			<div>
				<form
					style={{
						width: "100%",
						display: "flex",
						flexDirection: "column",
						gap: "25px",
					}}
					onSubmit={handleSubmit(onSubmit)}
				>
					<label
						style={{
							display: "flex",
							flexDirection: "column",
							width: "100%",
						}}
					>
						<div>
							<LargeText>Tu nombre Completo</LargeText>
							<InputSmall
								type="text"
								defaultValue={myData?.name}
								{...register("nombre_completo", {
									required: "Error with complete name",
									pattern: {
										value: onlyStringPattern,
										message:
											"Ingresa tu nombre y apellido sin numeros ni simbolos",
									},
								})}
							></InputSmall>
							<ErrorInputCont>
								{errors["nombre_completo"] && (
									<span>Ingresa tu nombre y apellido sin simbolos</span>
								)}
							</ErrorInputCont>
						</div>
					</label>
					<label
						style={{
							display: "flex",
							flexDirection: "column",
							width: "100%",
						}}
					>
						<div>
							<LargeText>Numero de teléfono</LargeText>
							<InputSmall
								type="number"
								defaultValue={myData?.telephone_number || ""}
								{...register("numero_telefono", {
									required: true,
									maxLength: 13,
									minLength: 10,
								})}
							></InputSmall>
							<ErrorInputCont>
								{errors["numero_telefono"] && (
									<span>Completa con un número válido</span>
								)}
							</ErrorInputCont>
						</div>
					</label>
					<label
						style={{
							display: "flex",
							flexDirection: "column",
							width: "100%",
						}}
					>
						<div>
							<LargeText>Provincia</LargeText>
							<InputSmall
								defaultValue={myData?.address?.provincia || ""}
								type="text"
								{...register("provincia", {
									required: "Error with province",
									pattern: {
										value: onlyStringPattern,
										message: "Ingresa tu provincia sin numeros ni simbolos",
									},
								})}
							></InputSmall>
						</div>
					</label>
					<label
						style={{
							display: "flex",
							flexDirection: "column",
							width: "100%",
						}}
					>
						<div>
							<LargeText>Ciudad</LargeText>
							<InputSmall
								defaultValue={myData?.address?.ciudad || ""}
								type="text"
								{...register("ciudad", {
									required: "Error with city",
									pattern: {
										value: onlyStringPattern,
										message: "Ingresa tu ciudad sin numeros ni simbolos",
									},
								})}
							></InputSmall>
						</div>
					</label>
					<label
						style={{
							display: "flex",
							flexDirection: "column",
							width: "100%",
						}}
					>
						<div>
							<LargeText>Calle</LargeText>
							<InputSmall
								defaultValue={myData?.address?.direccion?.calle || ""}
								type="text"
								{...register("calle", {
									required: "Error with street",
									pattern: {
										value: stringAndNumbersPattern,
										message: "Ingresa tu calle sin numeros ni simbolos",
									},
								})}
							></InputSmall>
						</div>
					</label>
					<label
						style={{
							display: "flex",
							flexDirection: "column",
							width: "100%",
						}}
					>
						<div>
							<LargeText>Altura</LargeText>
							<InputSmall
								defaultValue={myData?.address?.direccion?.altura || ""}
								type="number"
								{...register("altura", {
									required: true,
									maxLength: 7,
									minLength: 1,
								})}
							></InputSmall>
						</div>
					</label>
					<PrimaryButton>Guardar</PrimaryButton>
				</form>
			</div>
		</div>
	);
}
