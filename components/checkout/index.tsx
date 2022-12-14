import { MyDataForm } from "components/forms";
import { ProductCheckoutCard } from "components/product-checkout-card";
import { useProduct } from "hooks/products";
import { useRouter } from "next/router";
import { LoaderBig, LoaderSmall } from "ui/loader";
import { PrincipalTitle, Subtitle } from "ui/texts";
import { CheckoutRoot, FormCont, AbsoluteLoader } from "./style";
import { useForm } from "react-hook-form";
import { useMe, useUpdateOrConfirmMyData } from "hooks/me";
import { useCreateOrder } from "hooks/order";
import { useEffect, useState } from "react";
import { createOrder, udpateOrConfirmMyData } from "lib/api";
import Head from "next/head";

export function CheckoutComp() {
	const router = useRouter();
	const productId = router.query.itemId as string;
	const product = useProduct(productId);
	const [activeLoader, setActiveLoader] = useState(false);
	var myData = useMe();

	useEffect(() => {
		if (myData == null) {
			router.push("/");
		}
	}, [myData]);

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
		setActiveLoader(true);
		udpateOrConfirmMyData(cleanData).then((r) => {
			if (r == null) {
				alert("Se produjo un error, intentalo mas tarde");
				//te llevo a la home
			} else {
				createOrder(productId).then((r) => {
					if (r == null) {
						alert("Se produjo un error, intentalo mas tarde");
						setActiveLoader(false);
					} else {
						router.push(r.url);
						setActiveLoader(false);
					}
				});
			}
		});
	};

	return (
		<CheckoutRoot>
			{product ? (
				product.error ? (
					<div>
						<Head>
							<title>Error</title>
						</Head>
						Ups! Hubo un error
					</div>
				) : (
					<div style={{ width: "100%" }}>
						<Head>
							<title>Checkout</title>
						</Head>
						<div
							style={
								activeLoader ? { display: "initial" } : { display: "none" }
							}
						>
							<AbsoluteLoader>
								<LoaderBig />
							</AbsoluteLoader>
						</div>
						<div
							style={{ backgroundColor: "var(--celeste-medio)", width: "100%" }}
						>
							<ProductCheckoutCard
								img={product.image}
								title={product.title}
								price={product.unit_cost}
							></ProductCheckoutCard>
						</div>
						<br />
						<div style={{ textAlign: "center" }}>
							<PrincipalTitle>Por favor, confirma tus datos</PrincipalTitle>
						</div>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<FormCont>
								<MyDataForm onSubmit={onSubmit} />
							</FormCont>
						</div>
					</div>
				)
			) : (
				<div
					style={{
						height: "70vh",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<LoaderBig />
				</div>
			)}
		</CheckoutRoot>
	);
}
