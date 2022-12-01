import { HomeRoot, ProductsCont } from "./styled";
import { PrincipalTitle, Subtitle } from "ui/texts";
import { SearchProductComponent } from "components/search";
import { useDestacados } from "hooks/products";
import { ProductCardComp } from "components/product-card";
import { LoaderBig } from "ui/loader";

export function HomeComponent() {
	const products = useDestacados();
	return (
		<>
			<div style={{ paddingTop: "120px" }}>
				<SearchProductComponent></SearchProductComponent>
			</div>
			<HomeRoot>
				<section>
					<PrincipalTitle>Gran tienda</PrincipalTitle>
				</section>
				<br />
				<br />
				<ProductsCont>
					<div style={{ textAlign: "center" }}>
						<Subtitle>Productos Destacados</Subtitle>
					</div>
					{products ? (
						products.map((r: any) => {
							return (
								<ProductCardComp
									key={r.objectID}
									title={r.title}
									price={r["unit-cost"]}
									imageUrl={r.images[0].url}
									productID={r.objectID}
									stock={r.stock}
								></ProductCardComp>
							);
						})
					) : (
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<LoaderBig></LoaderBig>
						</div>
					)}
				</ProductsCont>
			</HomeRoot>
		</>
	);
}
