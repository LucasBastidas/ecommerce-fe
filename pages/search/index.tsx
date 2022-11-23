import { LayoutComp } from "components/layout";
import { ProductListComponent } from "components/product-list";
import { useRouter } from "next/router";

export default function Search() {
	const router = useRouter();
	console.log(router.query);
	return (
		<LayoutComp>
			<ProductListComponent productQuery={router.query.q} />
		</LayoutComp>
	);
}
