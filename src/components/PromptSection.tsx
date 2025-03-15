'use client';

import { promptSectionData } from "@/data/promptSection";
import Button from "./Button";
import PromptBox, { PromptBoxType } from "./PromptBox/PromptBox";
import Heading from "./Typography/Heading";
import Text from "./Typography/Text";

function PromptSection({ promptBoxType }: { promptBoxType: PromptBoxType }) {
	const handleSubmit = () => { };

	// Find the correct data for this prompt type
	const promptData = promptSectionData.find(item => item.type === promptBoxType);

	return (
		<section className="flex flex-col items-center justify-center space-y-8">
			<Heading level="h1" center className="mb-4">{promptData?.title}</Heading>
			<Text center>{promptData?.description}</Text>
			<PromptBox onSubmit={handleSubmit} type={promptBoxType} />
			<Button
				label="Customize Your Summarization"
				icon="filter"
				variant="ghost"
				size="lg"
			/>
		</section>
	)
}

export default PromptSection;