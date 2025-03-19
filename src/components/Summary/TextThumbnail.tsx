'use client';

import { useState } from 'react';
import Text from '../Typography/Text';
import TextIcon from '../Icon/Text';
import Heading from '../Typography/Heading';
import ChevronDown from '../Icon/ChevronDown';
import WordCount from '../WordCount';

interface TextThumbnailProps {
  content: string;
  title?: string;
  wordCount?: number;
}

function TextThumbnail({ content, title, wordCount }: TextThumbnailProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!content) {
    return null;
  }

  const previewText = content.slice(0, 500) + (content.length > 500 ? '...' : '');

  return (
    <div
      className='border border-white/10 rounded-[15px] p-4 cursor-pointer hover:bg-white/5 transition-colors duration-200'
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <TextIcon className='w-8 h-auto text-white/50' />
          <Text><span className='font-medium'>Raw Text</span></Text>
        </div>
        <ChevronDown
          className={`w-6 h-6 text-white/60 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
        />
      </div>
      <div className={`overflow-hidden transition-[max-height,opacity] duration-300 ${isExpanded ? 'max-h-[500px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
        <div className='bg-white/5 rounded-lg p-4'>
          <Text className='text-sm leading-6 text-gray-300'>{previewText}</Text>
        </div>
      </div>
    </div>
  );
}

export default TextThumbnail;
