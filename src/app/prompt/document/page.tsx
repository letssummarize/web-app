import Divider from "@/components/Divider";
import PromptSection from "@/components/PromptSection";
import ServicesCards from "@/components/ServicesCards";

export default function PromptDocumentPage() {
	return (
		<>
			<PromptSection promptBoxType="upload" />
			<Divider />
			<ServicesCards exclude="document" />
		</>
	);
}
