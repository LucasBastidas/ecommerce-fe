import styled from "styled-components";

export const PrincipalTitle = styled.h1`
	font-size: 48px;
	font-weight: bold;
	cursor: default;
	color: var(--azul-oscuro);
`;

export const Subtitle = styled(PrincipalTitle).attrs({
	as: "h2",
})`
	font-size: 36px;
`;

export const LargeText = styled.p`
	font-size: 24px;
`;

export const LargeTextBold = styled(LargeText)`
	font-weight: bold;
`;

export const BodyText = styled(LargeText)`
	font-size: 16px;
`;

export const BodyTextBold = styled(BodyText)`
	font-weight: bold;
`;

export const TinyText = styled(BodyText)`
	font-size: 12px;
`;
