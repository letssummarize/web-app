'use client';

import { promptSectionData } from '@/data/promptSection';
import PromptBox, { PromptBoxType } from './PromptBox/PromptBox';
import Heading from './Typography/Heading';
import Text from './Typography/Text';
import { useSummary } from '@/hooks/useSummary';

function PromptSection({ promptBoxType }: { promptBoxType: PromptBoxType }) {
  const {
    summarizeVideo,
  } = useSummary();

  const handleSubmit = (input: string) => {
    if (promptBoxType === 'url') {
      summarizeVideo(input);
    }
  };

  const promptData = promptSectionData.find(
    (item) => item.type === promptBoxType
  );

  return (
    <>
      <section className='flex flex-col items-center justify-center space-y-8'>
        <Heading level='h1' center className='mb-4'>
          {promptData?.title}
        </Heading>
        <Text center>{promptData?.description}</Text>
        <PromptBox onSubmit={handleSubmit} type={promptBoxType} />
      </section>
    </>
  );
}

export default PromptSection;
