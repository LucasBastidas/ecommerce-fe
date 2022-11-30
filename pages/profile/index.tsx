import { LayoutComp } from "components/layout";
import { ProfileComp } from "components/profile";

export default function Profile() {
	return (
		<LayoutComp>
			<div style={{ paddingTop: "120px" }}>
				<ProfileComp></ProfileComp>
			</div>
		</LayoutComp>
	);
}
