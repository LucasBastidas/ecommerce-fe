import {
	PrincipalTitle,
	Subtitle,
	LargeText,
	LargeTextBold,
	BodyText,
	BodyTextBold,
	TinyText,
} from "ui/texts";
import { PrimaryButton, SecondaryButton, AlternativeButton } from "ui/buttons";
import { TextField } from "ui/text-fields";
import { LoaderSmall, LoaderBig } from "ui/loader";
import { ProductCardComp } from "components/product-card";

export default function Ui() {
	return (
		<div>
			<section>
				<PrincipalTitle>Title</PrincipalTitle>
				<Subtitle>Subtitle</Subtitle>
				<LargeText>Large</LargeText>
				<LargeTextBold>Large bold</LargeTextBold>
				<BodyText>
					Body: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Phasellus imperdiet eros suscipit pulvinar euismod. Suspendisse
					potenti.
				</BodyText>
				<BodyTextBold>
					BodyBold: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Phasellus imperdiet eros suscipit pulvinar euismod. Suspendisse
					potenti.
				</BodyTextBold>
				<TinyText>
					Tiny text: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Phasellus imperdiet eros suscipi
				</TinyText>
			</section>
			<section>
				<PrimaryButton>Texto del botón</PrimaryButton>
				<br />
				<br />
				<SecondaryButton>Texto del botón</SecondaryButton>
				<br />
				<br />
				<AlternativeButton>Texto del botón</AlternativeButton>
			</section>
			<section>
				<TextField type="text" title="Nombre y Apellido" required></TextField>
			</section>
			<section>
				<LoaderSmall></LoaderSmall>
				<LoaderBig />
			</section>
			<section>
				<ProductCardComp
					title="Cama solar"
					price={23000}
					imageUrl={
						"https://www.hospitalaleman.org.ar/wp-content/uploads/2019/01/cama-solar.png"
					}
					key={"productId"}
					productID={"test"}
					stock={23}
				></ProductCardComp>
			</section>
		</div>
	);
}
