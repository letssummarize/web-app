'use client';

import { useState } from 'react';

interface SliderProps {
  label: string;
  min: number;
  max: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
  labels?: string[];
}

export default function Slider({
  label,
  min,
  max,
  step = 1,
  value,
  onChange,
  labels,
}: SliderProps) {
  const [sliderValue, setSliderValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setSliderValue(newValue);
    onChange(newValue);
  };

  const handleLabelClick = (index: number) => {
    setSliderValue(index);
    onChange(index);
  };

  return (
    <div className='flex flex-col w-full mb-[18px]'>
      <label className='text-white text-base font-medium mb-3'>{label}</label>
      <input
        type='range'
        min={min}
        max={max}
        step={step}
        value={sliderValue}
        onChange={handleChange}
        className='w-full h-[1px] appearance-none bg-white/50 cursor-pointer'
      />
      {labels && labels.length === 3 && (
        <div className='relative flex justify-between text-gray-400 text-sm mt-3'>
          {labels.map((lbl, index) => (
            <span
              key={index}
              className={`absolute ${
                index === 0 ? 'left-0' : index === labels.length - 1 ? 'right-0' : 'left-1/2 -translate-x-1/2'
              } ${
                sliderValue === index
                  ? 'text-white font-medium'
                  : 'text-gray-400'
              } cursor-pointer`}
              onClick={() => handleLabelClick(index)}
            >
              {lbl}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
