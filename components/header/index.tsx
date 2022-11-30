import { HeaderRoot, ActiveOrInactiveMenu } from "./styled";
import { LogoCompleto, MenuIcon } from "ui/icons";
import { Menu, MenuDesktop } from "components/menu";
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
				<div>
					<LogoCompleto onClick={handleLogoButton}></LogoCompleto>
				</div>
				<div>
					<MenuIcon onClick={handleButtonMenu}></MenuIcon>
					<MenuDesktop />
				</div>
			</HeaderRoot>
			{activeMenu ? (
				<Menu
					closeMenu={() => {
						setActiveMenu(false);
					}}
					display="flex"
				></Menu>
			) : (
				<Menu display="none"></Menu>
			)}
		</div>
	);
}
