import { useRouter } from "next/router";
import { PrimaryButton } from "ui/buttons";
import { PrincipalTitle, Subtitle } from "ui/texts";
import { ThanksRoot } from "./style";
export function ThanksComp() {
	const router = useRouter();
	function handleButton() {
		router.push("/");
	}
	return (
		<ThanksRoot>
			<PrincipalTitle>Muchas gracias por tu compra!😁😀</PrincipalTitle>
			<br />
			<Subtitle>Recuerda comprobar tu email, puede que llegue al spam</Subtitle>
			<br />
			<br />
			<PrimaryButton onClick={handleButton}>Volver a la tienda</PrimaryButton>
		</ThanksRoot>
	);
}
