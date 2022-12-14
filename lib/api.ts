import useSWR from "swr";

const URL_BASE = "https://ecommerce-be-weld.vercel.app/api";

//GET
export async function fetchAPI(input: RequestInfo, options: RequestInit) {
	//el input lo envia directamente la key de SWR
	// console.log({ input });

	const url = URL_BASE + input;
	const token = localStorage.getItem("token");
	const newOptions: any = options || {};

	// newOptions.headers = newOptions.headers || {}; ESTO SE ABREVIA ASI
	newOptions.headers ||= {}; //EL IGUAL TIENE QUE IR PEGADO
	if (token) {
		newOptions.headers.authorization = "Bearer " + token;
	}
	newOptions["content-type"] = "application/json";

	const res = await fetch(url, newOptions);
	if (res.status >= 200 && res.status < 300) {
		return await res.json();
	} else {
		throw { error: "Hubo un error", status: res.status };
	}
}

export function saveTokenInLocalStorage(token: string) {
	localStorage.setItem("token", token);
}

export function getTokenOfLocalStorage() {
	return localStorage.getItem("token");
}

export function deleteTokenOfLocalStorage() {
	return localStorage.removeItem("token");
}

export async function sendCode(email: string) {
	const codeSended = await fetch(URL_BASE + "/auth", {
		method: "POST",
		mode: "cors",
		headers: {
			"Content-type": "application/json",
		},
		body: JSON.stringify({ email: email }),
	});
	// .catch((err) => {
	// 	console.log("ESTE ES EL ERROR: ", err);
	// });
	if (codeSended.status < 300 && codeSended.status >= 200) {
		console.log("200");

		return true;
	} else {
		console.log("400");

		return false;
	}
}

export async function getToken(email: string, code: string) {
	const res = await fetch(`${URL_BASE}/auth/token`, {
		method: "POST",
		mode: "cors",
		headers: {
			"Content-type": "application/json",
		},
		body: JSON.stringify({ email: email, code: parseInt(code, 10) }),
	});
	// .catch((err) => {
	// 	console.log("ESTE ES EL ERROR: ", err);
	// })
	if (res.status < 300 && res.status >= 200) {
		const data = await res.json();
		const token = data.success.token;
		saveTokenInLocalStorage(token);
		console.log("bien");

		return data;
	} else if (res.status == 403) {
		return {
			message: "Error, el codigo expir?? o es incorrecto",
			status: res.status,
		};
	} else {
		throw { message: "Error, algo sal??o mal", status: res.status };
	}
}

export type MyData = {
	name: string;
	tel: any;
	address: {
		provincia: string;
		ciudad: string;
		direccion: {
			calle: string;
			altura: number;
		};
	};
};

export async function udpateOrConfirmMyData(params: MyData) {
	const token = getTokenOfLocalStorage();
	const res = await fetch(`${URL_BASE}/me`, {
		method: "PATCH",
		mode: "cors",
		headers: {
			"Content-type": "application/json",
			authorization: `bearer ${token}`,
		},
		body: JSON.stringify({
			name: params.name,
			tel: parseInt(params.tel, 10),
			address: params.address,
		}),
	});
	if (res.status >= 200 && res.status < 300) {
		return res.json();
	} else {
		throw { message: "algo sal??o mal", status: res.status };
	}
}

export async function createOrder(productId: string) {
	const token = getTokenOfLocalStorage();
	const res = await fetch(`${URL_BASE}/order?productId=${productId}`, {
		method: "POST",
		mode: "cors",
		headers: {
			"Content-type": "application/json",
			authorization: `bearer ${token}`,
		},
	});
	if (res.status >= 200 && res.status < 300) {
		return res.json();
	} else {
		throw { message: "algo sal??o mal", status: res.status };
	}
}
