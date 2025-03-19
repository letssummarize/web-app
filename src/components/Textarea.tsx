'use client';

import InputLabel from './InputLabel';

interface TextareaProps {
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  disabled?: boolean;
  maxLength?: number;
  label?: string;
  description?: string;
}

const Textarea: React.FC<TextareaProps> = ({
  value,
  onChange,
  placeholder,
  disabled,
  maxLength,
  label,
  description,
}) => {
  return (
    <div className={`flex flex-col w-full ${disabled ? 'opacity-50' : ''}`}>
      {label &&
        <InputLabel
          label={label}
          description={description}
        />
      }
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={disabled}
        className={`w-full bg-[#0C0C0C] text-white border hover:border-white/30 rounded-lg py-3 px-4 placeholder:text-sm ${disabled
          ? 'cursor-not-allowed border-gray-800 hover:border-gray-800'
          : 'cursor-text'
          } transition-colors duration-200 min-h-[100px] resize-none placeholder:text-gray-300`}
      />
      {maxLength && (
        <p className="text-gray-400 text-xs mt-2">
          {value?.length || 0}/{maxLength} characters
        </p>
      )}
    </div>
  );
};

export default Textarea;
