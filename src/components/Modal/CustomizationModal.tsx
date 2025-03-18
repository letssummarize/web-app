'use client';

import { useState } from 'react';
import Slider from '../Slider';
import Modal from './Modal';
import Select from '../select';
import { SummaryOptions } from '@/api/types/api';
import { SummaryFormat, SummaryLength } from '@/api/enums/api.enums';

interface CustomizationModalProps {
  options: SummaryOptions;
  onSave: (options: SummaryOptions) => void;
  onClose: () => void;
}

const formatOptions = [
  { label: 'Narrative', value: SummaryFormat.NARRATIVE },
  { label: 'Bullet points', value: SummaryFormat.BULLET_POINTS },
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

function CustomizationModal({
  options,
  onSave,
  onClose,
}: CustomizationModalProps) {
  const [length, setLength] = useState(
    options.length ? lengthValueMap[options.length] || 1 : 1
  );
  const [format, setFormat] = useState<SummaryFormat>(
    options.format || SummaryFormat.DEFAULT
  );

  const handleFormatChange = (value: string) => {
    setFormat(value as SummaryFormat);
  };

  const handleSave = () => {
    onSave({
      length: lengthMap[length],
      format: format
    });
    onClose();
  };

  return (
    <Modal
      title='Customize Your Summarization'
      onSave={handleSave}
      onClose={onClose}
    >
      <div className='flex flex-col gap-5'>
        <Slider
          label='Summary Length'
          min={0}
          max={2}
          value={length}
          onChange={setLength}
          labels={['Short', 'Standard', 'Detailed']}
        />
        <Select
          label='Summary Format'
          options={formatOptions}
          value={format}
          onChange={handleFormatChange}
        />
      </div>
    </Modal>
  );
}

export default CustomizationModal;
