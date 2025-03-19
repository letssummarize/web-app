'use client';

import { useState } from 'react';
import InputLabel from './InputLabel';

interface SliderProps {
  label: string;
  min: number;
  max: number;
  step?: number;
  value?: number;
  onChange: (value: number) => void;
  labels?: string[];
  disabled?: boolean;
  description?: string;
}

export default function Slider({
  label,
  min,
  max,
  step = 1,
  value,
  onChange,
  labels,
  disabled,
  description,
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
    <div className={`flex flex-col w-full mb-4 ${disabled ? 'opacity-50' : ''}`}>
      {label &&
        <InputLabel
          label={label}
          description={description}
        />
      }
      <input
        type='range'
        min={min}
        max={max}
        step={step}
        value={sliderValue}
        onChange={handleChange}
        className={`w-full h-[2px] appearance-none bg-white/20 border-none outline-none ${disabled
          ? 'cursor-not-allowed'
          : 'cursor-pointer'
          } [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:transition-colors [&::-webkit-slider-thumb]:duration-200 ${disabled
            ? '[&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:cursor-not-allowed'
            : '[&::-webkit-slider-thumb]:hover:bg-white'
          }`}
        disabled={disabled}
      />
      {labels && labels.length === 3 && (
        <div className='relative flex justify-between text-gray-400 text-xs mt-3'>
          {labels.map((lbl, index) => (
            <span
              key={index}
              className={`absolute ${index === 0 ? 'left-0' : index === labels.length - 1 ? 'right-0' : 'left-1/2 -translate-x-1/2'
                } ${sliderValue === index
                  ? 'text-white font-medium'
                  : 'text-gray-400'
                } ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'} transition-colors duration-200`}
              onClick={() => !disabled && handleLabelClick(index)}
            >
              {lbl}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
