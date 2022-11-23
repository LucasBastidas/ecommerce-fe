import styled from "styled-components";
import { BodyTextBold } from "ui/texts";
export const InputSmall = styled.input`
	padding: 10px 30px;
	border: none;
	border-radius: 15px;
	@media (min-width: 720px) {
		padding: 10px 60px;
	}
`;

export const InputBig = styled(InputSmall)`
	padding: 20px 50px;
	@media (min-width: 720px) {
		padding: 20px 60px;
	}
`;

export const TextField = ({
	placeHolder = "PlaceHolder",
	type = "text",
	title = "title",
	name,
}: any) => {
	return (
		<label>
			<BodyTextBold>{title}</BodyTextBold>
			<br />
			<InputBig
				required
				name={name}
				type={type}
				placeholder={placeHolder}
			></InputBig>
		</label>
	);
};
