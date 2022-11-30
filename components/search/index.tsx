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
				<InputButtonCont>
					<InputSmall
						maxLength={20}
						type="search"
						name="query"
						placeholder="Silla..."
						required
					></InputSmall>
					<PrimaryButton>Buscar</PrimaryButton>
				</InputButtonCont>
			</form>
		</SearchProductRoot>
	);
}
