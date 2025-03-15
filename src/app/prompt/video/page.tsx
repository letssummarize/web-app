import Divider from "@/components/Divider";
import PromptSection from "@/components/PromptSection";
import ServicesCards from "@/components/ServicesCards";

export default function PromptVideoPage() {
	return (
		<>
			<PromptSection promptBoxType="url" />
			<Divider />
			<ServicesCards exclude="youtube" />
		</>
	);
}
