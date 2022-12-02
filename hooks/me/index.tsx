import useSWR from "swr";
import {
	deleteTokenOfLocalStorage,
	fetchAPI,
	getTokenOfLocalStorage,
	MyData,
	udpateOrConfirmMyData,
} from "lib/api";

export function useMe() {
	const { data, error } = useSWR("/me", fetchAPI);
	if (error) {
		// console.log(error);
		return null;
	}
	return data;
}

export function closeSesion(callback: Function) {
	deleteTokenOfLocalStorage();
	callback();
}

export async function useUpdateOrConfirmMyData(params: MyData) {
	try {
		const res = await udpateOrConfirmMyData(params);
		return res;
	} catch (error) {
		// console.log(error);
		return null;
	}
}
