'use client';

import React, { useEffect, useState } from 'react';
import Button from '../Button';
import UrlInput from './UrlInput';
import Textarea from './Textarea';
import UploadBox from './UploadBox';
import Overlay from '../Overlay';
import CustomizationModal from '../Modal/CustomizationModal';
import { useSummary } from '@/hooks/useSummary';

export type PromptBoxType = 'url' | 'text' | 'upload';

interface PromptBoxProps {
  onSubmit: (url: string) => void;
  className?: string;
  type: PromptBoxType;
  value?: string;
}

function PromptBox({ onSubmit, type, className, value = '' }: PromptBoxProps) {
  const { options, setOptions } = useSummary();
  const [showCustomization, setShowCustomization] = useState(false);
  const [input, setInput] = useState(value);

  useEffect(() => {
    setInput(value);
  }, [value]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSubmit(input.trim());
    }
  };

  const roundedClassName = type === 'url' ? 'rounded-full' : 'rounded-[15px]';

  return (
    <div
      className={`w-full flex flex-col items-center justify-center space-y-8 ${className}`}
    >
      <form onSubmit={handleSubmit} className='relative w-full'>
        <div
          className={`relative flex items-center w-full overflow-hidden bg-gradient-to-r from-[#D8775F] via-[#A02B66] to-[#3E15BA] p-[1px] shadow-[0px_0px_50px_0px_rgba(183,75,99,0.4)] ${roundedClassName}`}
        >
          <div
            className={`w-full bg-[#0C0C0C] flex ${
              type === 'text' ? 'flex-col items-end' : 'items-center'
            } gap-3 ${roundedClassName}`}
          >
            {type === 'url' && <UrlInput url={input} setUrl={setInput} />}
            {type === 'text' && <Textarea />}
            {type === 'upload' && <UploadBox />}

            {(type === 'text' || type === 'url') && (
              <Button
                type='submit'
                label='Summarize'
                icon='ai'
                variant='gradient'
                radius={type === 'url' ? 'full' : 'default'}
                size={type === 'url' ? 'lg' : 'md'}
                className={`${type === 'text' ? 'mr-2 mb-2' : 'mr-2'}`}
              />
            )}
          </div>
        </div>
      </form>

      <Button
        label='Customize Your Summarization'
        icon='filter'
        variant='ghost'
        size='lg'
        onClick={() => setShowCustomization(true)}
      />

      {showCustomization && (
        <Overlay>
          <CustomizationModal
            options={options}
            onSave={setOptions}
            onClose={() => setShowCustomization(false)}
          />
        </Overlay>
      )}
    </div>
  );
}

export default PromptBox;
