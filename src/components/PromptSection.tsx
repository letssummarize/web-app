'use client';

import { promptSectionData } from '@/data/promptSection';
import PromptBox, { PromptBoxType } from './PromptBox/PromptBox';
import Heading from './Typography/Heading';
import Text from './Typography/Text';
import { useSummary } from '@/hooks/useSummary';
import LoadingSpinner from './LoadingSpinner';

interface PromptSectionProps {
  promptBoxType: PromptBoxType;
  value?: string;
  uploadedFile?: File | null;
  showHeading?: boolean;
  shouldFocus?: boolean;
}

function PromptSection({
  promptBoxType,
  value,
  uploadedFile,
  showHeading = true,
  shouldFocus = true,
}: PromptSectionProps) {
  const { summarizeVideo, summarizeText, summarizeDoc, isLoading, error } =
    useSummary();

  const handleSubmit = (input: string) => {
    if (promptBoxType === 'url') {
      summarizeVideo(input);
    } else if (promptBoxType === 'text') {
      summarizeText(input);
    }
  };

  const handleFileUpload = (file: File) => {
    summarizeDoc(file);
  };

  const promptData = promptSectionData.find(
    (item) => item.type === promptBoxType
  );

  return (
    <section className='flex flex-col items-center justify-center space-y-8'>
      {showHeading && (
        <>
          <Heading level='h1' center className='mb-4'>
            {promptData?.title}
          </Heading>
          <Text center>{promptData?.description}</Text>
        </>
      )}

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <PromptBox
          onSubmit={handleSubmit}
          onFileUpload={handleFileUpload}
          uploadedFile={uploadedFile}
          type={promptBoxType}
          value={value}
          shouldFocus={true}
        />
      )}

      {error && <div className='text-red-500 mt-4'>Error: {error}</div>}
    </section>
  );
}

export default PromptSection;
