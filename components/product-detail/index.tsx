import { useProduct } from "hooks/products";
import { Subtitle, LargeText, BodyText, TinyText } from "ui/texts";
import {
	ProductDetailRoot,
	TitleAndPriceCont,
	ImgCont,
	PopUpWindowRoot,
} from "./style";
import { LoaderBig } from "ui/loader";
import Head from "next/head";
import { PrimaryButton, SecondaryButton } from "ui/buttons";
import { SearchProductComponent } from "components/search";
import { useRouter } from "next/router";
import { useMe } from "hooks/me";
import { useState } from "react";

export function ProductDetail({ productID }: any) {
	const router = useRouter();
	const product = useProduct(productID);
	var myData = useMe();
	const [ventanaEmergente, setVentanaEmergente] = useState(false);
	function handleBuyButton() {
		if (myData != null) {
			router.push(`/checkout/${productID}`);
		} else {
			// router.push(`/signin`);
			setVentanaEmergente(true);
		}
	}

	function handleSignInButton() {
		setVentanaEmergente(false);
		router.push("/signin");
	}

	function handleExitButton() {
		setVentanaEmergente(false);
	}

	return (
		<div>
			<div style={{ paddingTop: "120px" }}>
				<SearchProductComponent></SearchProductComponent>
			</div>
			<div
				style={ventanaEmergente ? { display: "block" } : { display: "none" }}
			>
				<PopUpWindowRoot>
					<h2>Necesitas iniciar sesión para hacer la compra</h2>
					<h2>Iniciar sesión?</h2>
					<div style={{ display: "flex", gap: "50px" }}>
						<div>
							<PrimaryButton onClick={handleSignInButton}>Si</PrimaryButton>
						</div>
						<div>
							<SecondaryButton onClick={handleExitButton}>No</SecondaryButton>
						</div>
					</div>
				</PopUpWindowRoot>
			</div>
			{product ? (
				product.error ? (
					<div>Ups! Hubo un error</div>
				) : (
					<ProductDetailRoot>
						<Head>
							<title>Producto: {product.title}</title>
						</Head>
						<ImgCont>
							<img
								style={{ width: "100%", height: "100%" }}
								src={product.image}
								alt={`imagen de ${product.title}`}
							/>
						</ImgCont>
						<TitleAndPriceCont>
							<div>
								<Subtitle>{product.title}</Subtitle>
								<br />
								<LargeText>$ {product["unit_cost"]}</LargeText>
								<br />
								<div
									style={
										product.stock > 0
											? { display: "block" }
											: { display: "none" }
									}
								>
									<SecondaryButton onClick={handleBuyButton}>
										{" "}
										Comprar{" "}
									</SecondaryButton>
								</div>
								<br />
								<br />
								<TinyText>Stock:{product.stock}</TinyText>
							</div>
							<div>
								<BodyText>{product.description}</BodyText>
							</div>
						</TitleAndPriceCont>
					</ProductDetailRoot>
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
		</div>
	);
}

{
	/* <div>
<img src={imageUrl} alt={`imagen de ${title}`} />
</div>
<div>
contenedor precio y titulo
<div>
   <Subtitle>{title}</Subtitle>
   <LargeText>$ {price}</LargeText>
</div>
<div>
   <BodyText>{description}</BodyText>
</div>
</div> */
}
