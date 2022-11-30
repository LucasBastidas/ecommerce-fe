import { LargeText, TinyText, BodyTextBold, BodyText } from "ui/texts";
import { ProductCheckoutRoot, ImageCont, TitlePriceCont } from "./style";
export function ProductCheckoutCard({ img, title, price }: any) {
	return (
		<ProductCheckoutRoot>
			<ImageCont>
				<img style={{ width: "100%" }} src={img} alt={`Imagen de ${title}`} />
			</ImageCont>

			<TitlePriceCont>
				<div>
					<LargeText>{title}</LargeText>
				</div>
				<div style={{ display: "flex", gap: "10px" }}>
					<BodyTextBold>Precio: </BodyTextBold>
					<BodyText>${price}</BodyText>
				</div>
			</TitlePriceCont>
		</ProductCheckoutRoot>
	);
}
