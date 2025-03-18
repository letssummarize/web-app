import Text from '../Typography/Text';
import ReactMarkdown from 'react-markdown';
import { useState } from 'react';
import type { ReactNode } from 'react';

interface SummaryContentProps {
  text: string;
}

type ComponentType = {
  children?: ReactNode;
  [key: string]: any;
};

function SummaryContent({ text }: SummaryContentProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopyCode = (code: string, index: number) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    });
  };

  return (
    <div className='flex flex-col gap-6'>
      <ReactMarkdown
        components={{
          h1: ({ children }: ComponentType) => (
            <Text className='text-3xl font-bold mb-6'>{children}</Text>
          ),
          h2: ({ children }: ComponentType) => (
            <Text className='text-2xl font-bold mb-5'>{children}</Text>
          ),
          h3: ({ children }: ComponentType) => (
            <Text className='text-xl font-bold mb-4'>{children}</Text>
          ),
          p: ({ children }: ComponentType) => (
            <Text className='leading-8 mb-4'>{children}</Text>
          ),
          ul: ({ children }: ComponentType) => (
            <ul className='list-disc pl-6 mb-4 space-y-2'>{children}</ul>
          ),
          ol: ({ children }: ComponentType) => (
            <ol className='list-decimal pl-6 mb-4 space-y-2'>{children}</ol>
          ),
          li: ({ children }: ComponentType) => (
            <li className='leading-7'>{children}</li>
          ),
          blockquote: ({ children }: ComponentType) => (
            <blockquote className='border-l-4 border-gray-700/50 pl-4 italic mb-4'>
              {children}
            </blockquote>
          ),
          pre: ({ children }: ComponentType) => {
            const codeContent =
              (children as any)?.[0]?.props?.children?.[0] || '';
            const index = Math.random();

            return (
              <div className='relative group'>
                <pre className='rounded font-mono bg-gray-700/20 text-gray-300 text-sm border border-gray-600/30 p-4 mb-4 overflow-x-auto'>
                  <code className='font-mono text-sm'>{children}</code>
                </pre>
                <button
                  onClick={() => handleCopyCode(codeContent, index)}
                  className='absolute top-3 right-3 px-2 py-1 text-xs rounded bg-gray-700/50 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity'
                >
                  {copiedIndex === index ? 'Copied!' : 'Copy'}
                </button>
              </div>
            );
          },
          code: ({ children }: ComponentType) => {
            return <code className='font-mono text-sm'>{children}</code>;
          },
          a: ({ href, children }: ComponentType) => (
            <a
              href={href}
              className='text-blue-400 hover:text-blue-300 underline'
            >
              {children}
            </a>
          ),
        }}
      >
        {text}
      </ReactMarkdown>
    </div>
  );
}

export default SummaryContent;
