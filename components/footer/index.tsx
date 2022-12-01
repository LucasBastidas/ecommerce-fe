import { FacebookLogo, TwitterLogo, InstagramLogo } from "ui/icons";
import { TinyText, LargeText } from "ui/texts";
import { FooterRoot, CopyRightCont } from "./styled";

export function FooterComp() {
	return (
		<div>
			<FooterRoot>
				<div>
					<LargeText>Redes</LargeText>
					<br />
					<br />
					<div style={{ cursor: "pointer", display: "flex", gap: "5px" }}>
						<FacebookLogo />
						<TinyText>Tienda-Ya</TinyText>
					</div>
					<br />
					<div style={{ cursor: "pointer", display: "flex", gap: "5px" }}>
						<TwitterLogo />
						<TinyText>Tienda-Ya</TinyText>
					</div>
					<br />
					<div style={{ cursor: "pointer", display: "flex", gap: "5px" }}>
						<InstagramLogo />
						<TinyText>Tienda-Ya</TinyText>
					</div>
				</div>
				<CopyRightCont>
					<p>©2022 created by &nbsp;</p>
					{"  "}
					<a
						style={{ color: "var(--celeste-claro)" }}
						target="_blank"
						href="https://lucasbastidas.github.io/my-portfolio/"
					>
						@LucasBastidas
					</a>
				</CopyRightCont>
			</FooterRoot>
		</div>
	);
}
