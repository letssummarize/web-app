import Divider from "@/components/Divider";
import PromptSection from "@/components/PromptSection";
import ServicesCards from "@/components/ServicesCards";

export default function PromptTextPage() {
	return (
		<>
			<PromptSection promptBoxType="text" />
			<Divider />
			<ServicesCards exclude="text" />
		</>
	);
}
