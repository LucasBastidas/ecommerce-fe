import { useProduct } from "hooks/products";
import { Subtitle, LargeText, BodyText, TinyText } from "ui/texts";
import { ProductDetailRoot, TitleAndPriceCont, ImgCont } from "./style";
import { LoaderBig } from "ui/loader";
import Head from "next/head";
import { SecondaryButton } from "ui/buttons";
import { SearchProductComponent } from "components/search";
import { useRouter } from "next/router";
import { useMe } from "hooks/me";

export function ProductDetail({ productID }: any) {
	const router = useRouter();
	const product = useProduct(productID);
	console.log(productID);
	console.log(product);
	var myData = useMe();
	function handleBuyButton() {
		if (myData != null) {
			router.push(`/checkout/${productID}`);
		} else {
			router.push(`/signin`);
		}
	}

	return (
		<div>
			<div style={{ paddingTop: "120px" }}>
				<SearchProductComponent></SearchProductComponent>
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
								<SecondaryButton onClick={handleBuyButton}>
									{" "}
									Comprar{" "}
								</SecondaryButton>
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
