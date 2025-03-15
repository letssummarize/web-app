'use client';

import React, { useState } from 'react';
import Button from './Button';

interface VideoInputProps {
  onSubmit: (url: string) => void;
  className?: string;
}

function PromptBox({ onSubmit, className = '' }: VideoInputProps) {
  const [url, setUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      onSubmit(url.trim());
    }
  };

  return (
    <div className={`w-full ${className}`}>
      <form onSubmit={handleSubmit} className="relative w-full">
        <div className="relative flex items-center w-full rounded-full overflow-hidden bg-gradient-to-r from-[#D8775F] via-[#A02B66] to-[#3E15BA] p-[1px] shadow-[0px_0px_50px_0px_rgba(183,75,99,0.4)]">
          <div className="w-full rounded-full bg-[#0C0C0C] flex items-center pr-2 gap-2">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter YouTube Video URL"
              className="w-full pl-10 py-6 bg-transparent text-white font-light placeholder-gray-300 focus:outline-none"
            />
            <Button
              type="submit"
              label="Summarize"
              icon="ai"
              variant="gradient"
              radius="full"
              size="lg"
              className="shadow-lg"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default PromptBox;
