import { Dispatch, SetStateAction, useEffect, useRef } from 'react';

interface TextareaProps {
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
  shouldFocus?: boolean;
}

function Textarea({ value, onChange, shouldFocus = true }: TextareaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (shouldFocus && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [shouldFocus]);

  return (
    <textarea
      ref={textareaRef}
      placeholder="Paste or type in any text, and we'll summarize it for you."
      className="w-full pl-4 py-4 h-[130px] bg-transparent text-white font-light placeholder-gray-300 focus:outline-none resize-none"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default Textarea;
