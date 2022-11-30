import { createOrder } from "lib/api";

export async function useCreateOrder(productId: string) {
	try {
		const res = await createOrder(productId);
		return res;
	} catch (error) {
		console.log(error);
		return null;
	}
}
