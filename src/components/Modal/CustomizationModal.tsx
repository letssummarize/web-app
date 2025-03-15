'use client';

import { useState } from 'react';
import Slider from '../Slider';
import Modal from './Modal';
import Select from '../select';

interface CustomizationModalProps {
  onClose: () => void;
}

const formatOptions = [
  { label: 'default', value: 'default' },
  { label: 'Bullet points', value: 'bullet' },
  { label: 'Narrative', value: 'narrative' },
];

function CustomizationModal({ onClose }: CustomizationModalProps) {
  const [length, setLength] = useState(1);
  const [format, setFormat] = useState('default');

  return (
    <Modal
      title='Customize Your Summarization'
      onSave={() => {
        onClose();
      }}
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
          onChange={setFormat}
        />
      </div>
    </Modal>
  );
}

export default CustomizationModal;
