import { PrimaryButton } from "ui/buttons";
import { InputSmall } from "ui/text-fields";
import { LargeTextBold } from "ui/texts";
import { SearchProductRoot, InputButtonCont } from "./styled";
import { useRouter } from "next/router";

export function SearchProductComponent() {
	const router = useRouter();
	function handleForm(e: any) {
		e.preventDefault();
		var query = e.target.query.value;
		router.push(`/search?q=${query}`);
	}

	return (
		<SearchProductRoot>
			<form onSubmit={handleForm}>
				<div style={{ display: "flex", paddingBottom: "10px" }}>
					<LargeTextBold>Busca tu producto</LargeTextBold>
				</div>
				<InputButtonCont>
					<InputSmall
						maxLength={20}
						type="search"
						name="query"
						required
					></InputSmall>
					<PrimaryButton>Buscar</PrimaryButton>
				</InputButtonCont>
			</form>
		</SearchProductRoot>
	);
}
