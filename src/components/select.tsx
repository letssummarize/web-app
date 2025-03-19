'use client';

import { useEffect, useRef, useState } from 'react';
import { IconName } from '@/components/Icon/types/Icon';
import ChevronDown from './Icon/ChevronDown';
import Icon from './Icon/Icon';
import InputLabel from './InputLabel';

interface SelectOption {
  label: string;
  value: string;
  icon?: IconName;
}

interface SelectProps {
  label?: string;
  options: SelectOption[];
  value?: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  description?: string;
}

export default function Select({
  label,
  options,
  value,
  description,
  onChange,
  disabled,
}: SelectProps) {
  const [selectedValue, setSelectedValue] = useState(value);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const listboxId = `select-listbox-${Math.random().toString(36).substr(2, 9)}`;

  const handleOptionClick = (optionValue: string) => {
    if (!disabled) {
      setSelectedValue(optionValue);
      onChange(optionValue);
      setIsOpen(false);
    }
  };

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;

    const currentIndex = options.findIndex(option => option.value === selectedValue);

    switch (e.key) {
      case 'Escape':
        setIsOpen(false);
        break;
      case 'Enter':
      case ' ':
        if (!isOpen) {
          setIsOpen(true);
        }
        break;
      case 'ArrowDown':
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else if (currentIndex < options.length - 1) {
          const nextValue = options[currentIndex + 1].value;
          setSelectedValue(nextValue);
          onChange(nextValue);
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else if (currentIndex > 0) {
          const prevValue = options[currentIndex - 1].value;
          setSelectedValue(prevValue);
          onChange(prevValue);
        }
        break;
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find(option => option.value === selectedValue);

  return (
    <div className={`flex flex-col w-full ${disabled ? 'opacity-50' : ''}`}>
      {label &&
        <InputLabel
          label={label}
          description={description}
        />
      }
      <div className='relative w-full' ref={dropdownRef}>
        <div
          onClick={toggleDropdown}
          onKeyDown={handleKeyDown}
          role="combobox"
          aria-labelledby={label ? `${listboxId}-label` : undefined}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-controls={listboxId}
          aria-activedescendant={isOpen ? `${listboxId}-option-${selectedValue}` : undefined}
          tabIndex={disabled ? -1 : 0}
          aria-disabled={disabled}
          className={`w-full bg-[#0C0C0C] text-white border hover:border-white/30 rounded-lg py-2 px-4 flex justify-between items-center ${disabled ? 'cursor-not-allowed border-gray-800 hover:border-gray-800' : 'cursor-pointer'} transition-colors duration-200`}
        >
          <div className='flex items-center gap-2'>
            {selectedOption?.icon &&
              <Icon icon={selectedOption.icon} props={{ className: 'w-5 h-5 text-gray-300', 'aria-hidden': 'true' }} />
            }
            <span className='text-sm'>{selectedOption?.label || 'Select an option'}</span>
          </div>
          <ChevronDown className={`w-7 h-auto text-white/60 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
        </div>

        {isOpen && (
          <ul
            id={listboxId}
            role="listbox"
            aria-labelledby={label ? `${listboxId}-label` : undefined}
            className='absolute w-full bg-[#121212] border rounded-lg mt-2 py-1 z-20 shadow-lg max-h-60 overflow-auto'
          >
            {options.map((option) => (
              <li
                id={`${listboxId}-option-${option.value}`}
                key={option.value}
                role="option"
                aria-selected={selectedValue === option.value}
                onClick={() => handleOptionClick(option.value)}
                tabIndex={-1}
                className={`text-sm cursor-pointer flex items-center gap-2 px-4 py-2 hover:bg-white/10 transition-colors duration-150 ${selectedValue === option.value
                  ? 'bg-white/5 text-white font-medium'
                  : 'text-gray-300'
                  }`}
              >
                {option.icon && <Icon icon={option.icon} props={{ className: 'w-5 h-5', 'aria-hidden': 'true' }} />}
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
