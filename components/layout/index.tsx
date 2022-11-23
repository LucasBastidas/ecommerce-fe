import { HeaderComp } from "components/header";
import { FooterComp } from "components/footer";
import { SearchProductComponent } from "components/search";
import { LayoutRoot } from "./style";

export function LayoutComp({ children }: any) {
	//el padding es por el header
	return (
		<LayoutRoot>
			<HeaderComp></HeaderComp>
			<div style={{ paddingTop: "120px" }}>
				<SearchProductComponent></SearchProductComponent>
			</div>
			{children}
			<FooterComp></FooterComp>
		</LayoutRoot>
	);
}
