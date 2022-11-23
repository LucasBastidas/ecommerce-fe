import { useRouter } from "next/router";
import { ProductDetail } from "components/product-detail";
import { LayoutComp } from "components/layout";

export default function ItemPage() {
	const router = useRouter();
	const { itemId } = router.query;
	return (
		<LayoutComp>
			<ProductDetail productID={itemId}></ProductDetail>
		</LayoutComp>
	);
}
