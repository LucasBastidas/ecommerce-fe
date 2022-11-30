// import styled from "styled-components";
// import { TextButton } from "ui/buttons";
import styled from "styled-components";

import { TextButton } from "ui/buttons";

export const LogoutButton = styled(TextButton)`
	color: var(--celeste-medio);
`;

export const StyledMenuDesktopRoot = styled.div`
	display: none;
	@media (min-width: 1280px) {
		display: block;
	}
`;

export const LogoutButtonCont = styled.div`
	:hover {
		background-color: var(--celeste-verdoso);
	}
`;
