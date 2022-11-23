import Head from "next/head";
import { LayoutComp } from "components/layout";
import { HomeComponent } from "components/Home";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Tienda buena</title>
				<meta name="ecommerce" content="Tienda de muñecos" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<LayoutComp>
				<HomeComponent></HomeComponent>
			</LayoutComp>
		</div>
	);
}
