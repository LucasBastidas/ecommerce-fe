import { fetchAPI } from "lib/api";
import useSWRImmutable from "swr";

export function useSearch(queryProduct: string, limit = 10, offset = 0) {
	const { data, error } = useSWRImmutable(
		`${
			queryProduct
				? `/search?q=${queryProduct}&limit=${limit}&offset=${offset}`
				: "/search?limit=10&offset=0"
		}`,
		fetchAPI
	);
	if (error) {
		// console.log(error);
	}
	// console.log(data);

	return data?.results;
}

export function useProduct(productId: string) {
	const { data, error } = useSWRImmutable(
		`${productId ? `/products/${productId}` : null}`,
		fetchAPI
	);
	if (error) {
		// console.log(error);
		return { error: "no encontrado" };
	}
	return data?.productData;
}

export function useDestacados() {
	const { data, error } = useSWRImmutable(`/search?&limit=3`, fetchAPI);
	if (error) {
		// console.log(error);
	}

	return data?.results;
}

// export function useDestacados() {
// 	const { data, error } = useSWRImmutable("/api/destacados", fetch);
// 	if (error) {
// 		return { error: "no encontrado" };
// 	}
// 	console.log("Soydata: ", data);

// 	return data;
// }
