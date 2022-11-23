import { ProductCardComp } from "components/product-card";
import { useSearch } from "hooks/products";
import { useRouter } from "next/router";
import { ProductListRoot, ProductListCont } from "./styled";
import { LoaderBig } from "ui/loader";

export function ProductListComponent({ productQuery }: any) {
	const router = useRouter();
	const results = useSearch(productQuery);
	console.log(results);

	return (
		<ProductListRoot>
			{results ? (
				results.length > 0 ? (
					<ProductListCont>
						{results.map((r: any) => {
							return (
								<ProductCardComp
									title={r.title}
									price={r["unit-cost"]}
									imageUrl={r.images[0].thumbnails.full.url}
									productID={r.objectID}
									stock={r.stock}
									key={r.objectID}
								/>
							);
						})}
					</ProductListCont>
				) : (
					<div>No hay resultados</div>
				)
			) : (
				<div>
					<LoaderBig />
				</div>
			)}
		</ProductListRoot>
	);
}
