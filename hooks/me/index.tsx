import useSWR from "swr";
import { fetchAPI } from "lib/api";

export function useMe() {
	const { data, error } = useSWR("/me", fetchAPI);
	if (error) {
		console.log(error);
	}
	return data;
}
