import { closeSesion } from "hooks/me";
import { useRouter } from "next/router";
import { LoaderBig } from "ui/loader";

export default function Logout() {
	const router = useRouter();
	closeSesion(() => {
		router.push("/");
	});

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<LoaderBig />
		</div>
	);
}
