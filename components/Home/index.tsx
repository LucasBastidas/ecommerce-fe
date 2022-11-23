import { HomeRoot } from "./styled";
import { PrincipalTitle } from "ui/texts";
export function HomeComponent() {
	return (
		<HomeRoot>
			<section>
				<PrincipalTitle style={{ color: "var(--azul-oscuro)" }}>
					Gran tienda
				</PrincipalTitle>
			</section>
		</HomeRoot>
	);
}
