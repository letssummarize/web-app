import Button from "./Button";
import PromptBox from "./PromptBox";
import Heading from "./Typography/Heading";
import Text from "./Typography/Text";

function PromptSection() {
    const handleSubmit = () => { };

    return (
        <section className="flex flex-col items-center justify-center space-y-8">
            <Heading level="h1" center className="mb-4">Summarize YouTube Video</Heading>
            <Text center>
                Instantly summarize any YouTube video in seconds.
            </Text>
            <PromptBox onSubmit={handleSubmit} />
            <Button
                label="Customize Your Summarization"
                icon="ai"
                variant="ghost"
                size="lg"
            />
        </section>
    )
}

export default PromptSection;