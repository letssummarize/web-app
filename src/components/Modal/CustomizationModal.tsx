'use client';

import { useState } from 'react';
import Slider from '../Slider';
import Modal from './Modal';
import Select from '../select';
import { SummaryOptions } from '@/api/types/api';
import {
  SummaryFormat,
  SummaryLength,
  SummaryModel,
  SummarySpeed,
  SummarizationLanguage,
} from '@/api/enums/api.enums';
import Textarea from '../Textarea';
import Checkbox from '../Checkbox';
import Divider from '../Divider';

interface CustomizationModalProps {
  options: SummaryOptions;
  onSave: (options: SummaryOptions) => void;
  onClose: () => void;
}

const formatOptions = [
  { label: 'Default', value: SummaryFormat.DEFAULT },
  { label: 'Narrative', value: SummaryFormat.NARRATIVE },
  { label: 'Bullet points', value: SummaryFormat.BULLET_POINTS },
];

const modelOptions = [
  { label: 'OpenAI', value: SummaryModel.OPENAI },
  { label: 'DeepSeek', value: SummaryModel.DEEPSEEK },
];

const speedOptions = [
  { label: 'Fast', value: SummarySpeed.FAST },
  { label: 'Slow', value: SummarySpeed.SLOW },
];

const lengthMap: Record<number, SummaryLength> = {
  0: SummaryLength.SHORT,
  1: SummaryLength.STANDARD,
  2: SummaryLength.DETAILED,
};

const lengthValueMap: Record<string, number> = {
  [SummaryLength.SHORT]: 0,
  [SummaryLength.STANDARD]: 1,
  [SummaryLength.DETAILED]: 2,
};

const languageOptions = [
  { label: 'English', value: SummarizationLanguage.EN },
  { label: 'Arabic', value: SummarizationLanguage.AR },
];

function CustomizationModal({
  options,
  onSave,
  onClose,
}: CustomizationModalProps) {
  const [length, setLength] = useState(
    options.customInstructions 
      ? undefined 
      : (options.length ? lengthValueMap[options.length] : 1)
  );
  const [format, setFormat] = useState<SummaryFormat | undefined>(
    options.customInstructions ? undefined : (options.format || SummaryFormat.DEFAULT)
  );
  const [model, setModel] = useState<SummaryModel>(
    options.model || SummaryModel.DEFAULT
  );
  const [speed, setSpeed] = useState<SummarySpeed>(
    options.speed || SummarySpeed.DEFAULT
  );
  const [listen, setListen] = useState<boolean>(options.listen || false);
  const [lang, setLang] = useState<SummarizationLanguage>(
    options.lang || SummarizationLanguage.DEFAULT
  );
  const [customInstructions, setCustomInstructions] = useState<string>(
    options.customInstructions || ''
  );
  const [isCustomInstructionsEnabled, setIsCustomInstructionsEnabled] =
    useState<boolean>(!!options.customInstructions);

  const handleFormatChange = (value: string) => {
    setFormat(value as SummaryFormat);
  };

  const handleModelChange = (value: string) => {
    setModel(value as SummaryModel);
  };

  const handleSpeedChange = (value: string) => {
    setSpeed(value as SummarySpeed);
  };

  const handleListenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setListen(event.target.checked);
  };

  const handleLanguageChange = (value: string) => {
    setLang(value as SummarizationLanguage);
  };

  const handleCustomInstructionsChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setCustomInstructions(event.target.value.slice(0, 200));
  };

  const handleEnableCustomInstructionsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsCustomInstructionsEnabled(event.target.checked);
    if (event.target.checked) {
      setFormat(undefined);
      setLength(undefined);
    } else {
      setFormat(SummaryFormat.DEFAULT);
      setLength(1);
    }
  };

  const handleSave = () => {
    onSave({
      length: isCustomInstructionsEnabled ? undefined : (length !== undefined ? lengthMap[length] : undefined),
      format: isCustomInstructionsEnabled ? undefined : format,
      model: model,
      speed: speed,
      listen: listen,
      lang: lang,
      customInstructions: isCustomInstructionsEnabled ? customInstructions : '',
    });
    onClose();
  };

  return (
    <Modal
      title='Customize Your Summarization'
      onSave={handleSave}
      onClose={onClose}
    >
      <div className='flex flex-col gap-7'>
        {/* Model */}
        <Select
          label='Model'
          options={modelOptions}
          value={model}
          onChange={handleModelChange}
          description="Select the AI model to generate your summary"
        />

        {/* Language */}
        <Select
          label='Language'
          options={languageOptions}
          value={lang}
          onChange={handleLanguageChange}
          description="Choose the language for your summary"
        />

        <Divider />

        {/* Custom Instructions Toggle */}
        <Checkbox
          checked={isCustomInstructionsEnabled}
          onChange={handleEnableCustomInstructionsChange}
          label='Enable custom instructions'
          description='Use your own instructions instead of the predefined format and length options'
        />

        {/* Custom Instructions Input */}
        <Textarea
          value={customInstructions}
          onChange={handleCustomInstructionsChange}
          placeholder='Enter your custom instructions (max 200 characters)'
          disabled={!isCustomInstructionsEnabled}
          maxLength={200}
          label="Custom Instructions"
          description="Provide specific instructions for how you want the content to be summarized."
        />

        <Divider />

        {/* Length */}
        <Slider
          label='Summary Length'
          min={0}
          max={2}
          value={length}
          onChange={setLength}
          labels={['Brief', 'Standard', 'Comprehensive']}
          disabled={isCustomInstructionsEnabled}
          description="Choose how detailed you want your summary to be"
        />

        {/* Format */}
        <Select
          label='Summary Format'
          options={formatOptions}
          value={format}
          onChange={handleFormatChange}
          disabled={isCustomInstructionsEnabled}
          description="Choose how your summary should be structured"
        />

        <Divider />

        {/* Speed */}
        <Select
          label='Speed'
          options={speedOptions}
          value={speed}
          onChange={handleSpeedChange}
          description="Fast mode responds quicker but with slight inaccuracy, slow mode takes longer but is more precise"
        />

        <Divider />

        {/* Enable text-to-speech */}
        <Checkbox
          checked={listen}
          onChange={handleListenChange}
          label='Enable text-to-speech'
          description='Have your summary read aloud to you'
        />
      </div>
    </Modal>
  );
}

export default CustomizationModal;
