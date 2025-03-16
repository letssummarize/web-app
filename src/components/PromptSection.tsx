'use client';

import { promptSectionData } from '@/data/promptSection';
import Button from './Button';
import PromptBox, { PromptBoxType } from './PromptBox/PromptBox';
import Heading from './Typography/Heading';
import Text from './Typography/Text';
import { useState } from 'react';
import Overlay from './Overlay';
import CustomizationModal from './Modal/CustomizationModal';

function PromptSection({ promptBoxType }: { promptBoxType: PromptBoxType }) {
  const [showCustomization, setShowCustomization] = useState(false);
  const handleSubmit = () => {};

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
        <Button
          label='Customize Your Summarization'
          icon='filter'
          variant='ghost'
          size='lg'
          onClick={() => setShowCustomization(true)}
        />
      </section>

      {showCustomization && (
        <Overlay>
          <CustomizationModal onClose={() => setShowCustomization(false)} />
        </Overlay>
      )}
    </>
  );
}

export default PromptSection;
