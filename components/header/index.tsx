import { HeaderRoot, ActiveOrInactiveMenu } from "./styled";
import { LogoCompleto, MenuIcon } from "ui/icons";
import { Menu } from "components/menu";
import { useState } from "react";
import { useRouter } from "next/router";

export function HeaderComp() {
	const [activeMenu, setActiveMenu] = useState(false);
	const router = useRouter();

	function handleLogoButton() {
		router.push("/");
	}
	function handleButtonMenu() {
		if (!activeMenu) {
			setActiveMenu(true);
		} else {
			setActiveMenu(false);
		}
	}
	return (
		<div>
			<HeaderRoot>
				<div onClick={handleLogoButton}>
					<LogoCompleto />
				</div>
				<div>
					<MenuIcon onClick={handleButtonMenu}></MenuIcon>
				</div>
			</HeaderRoot>
			{activeMenu ? <Menu display="flex"></Menu> : <Menu display="none"></Menu>}
		</div>
	);
}
