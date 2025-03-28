'use client';

interface CheckboxProps {
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  disabled?: boolean;
  description?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, label, disabled, description }) => {
  return (
    <div className={`flex flex-col w-full ${disabled ? 'opacity-50' : ''}`}>
      <label className={`flex items-center gap-3 ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
        <div className="relative flex items-center justify-center">
          <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
            disabled={disabled}
            className={`peer appearance-none w-5 h-5 bg-[#0C0C0C] border border-white/20 rounded transition-colors duration-200 ${
              disabled 
                ? 'border-gray-800 hover:border-gray-800' 
                : 'hover:border-white/30'
            }`}
          />
          <svg
            className="absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-200 pointer-events-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <span className={`text-white text-base`}>{label}</span>
      </label>
      {description && (
        <p
          className="text-gray-400 text-xs mt-2 ml-8"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
    </div>
  );
};

export default Checkbox;
