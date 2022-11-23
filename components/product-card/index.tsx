import { useRouter } from "next/router";
import { TextButton } from "ui/buttons";
import { Subtitle, LargeText, TinyText } from "ui/texts";
import { ProductCardRoot, TextAndButtonRoot } from "./styled";

export function ProductCardComp({
	title,
	price,
	imageUrl,
	productID,
	stock,
}: any) {
	const router = useRouter();
	function handleButton() {
		router.push(`/item/${productID}`);
	}
	return (
		<ProductCardRoot>
			<div style={{ width: "100%" }}>
				<img
					style={{
						width: "100%",
						height: "230px",
						margin: "0px",
						borderTopRightRadius: "25px",
						borderTopLeftRadius: "25px",
					}}
					src={imageUrl}
					alt={`imagen de ${title}`}
				/>
			</div>
			<TextAndButtonRoot>
				<div>
					<div>
						<Subtitle>{title}</Subtitle>
					</div>
					<div>
						<LargeText>${price}</LargeText>
						<br />
						<TinyText>{`Stock: ${stock || "Sin stock"}`}</TinyText>
					</div>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "flex-end",
					}}
				>
					<TextButton onClick={handleButton}>Ver más</TextButton>
				</div>
			</TextAndButtonRoot>
		</ProductCardRoot>
	);
}
