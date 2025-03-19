import Text from '../Typography/Text';
import ReactMarkdown from 'react-markdown';
import { useState, useCallback } from 'react';
import { containArabicText } from '@/util/containArabicText';

interface SummaryContentProps {
  text: string;
}

interface CodeElementProps {
  children: string;
  className?: string;
}

function SummaryContent({ text }: SummaryContentProps) {
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);

  const handleCopyCode = useCallback((code: string, index: string) => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
      })
      .catch((err) => console.error('Failed to copy text: ', err));
  }, []);

  const direction = containArabicText(text) ? 'rtl' : 'ltr';

  return (
    <div
      className={`flex flex-col ${direction === 'rtl' ? 'md:text-right' : ''}`}
      style={{
        direction: direction === 'rtl' ? 'rtl' : 'ltr',
      }}
    >
      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <Text className='text-3xl font-bold mb-8'>{children}</Text>
          ),
          h2: ({ children }) => (
            <Text className='text-2xl font-bold mb-6 mt-8'>{children}</Text>
          ),
          h3: ({ children }) => (
            <Text className='text-xl font-bold mb-5 mt-6'>{children}</Text>
          ),
          p: ({ children }) => (
            <Text className='leading-8 mb-5'>{children}</Text>
          ),
          ul: ({ children }) => (
            <ul className='list-disc pl-6 mb-6 space-y-3'>{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className='list-decimal pl-6 mb-6 space-y-3'>{children}</ol>
          ),
          li: ({ children }) => (
            <li className='leading-7 pl-2 marker:text-gray-400 [&>strong]:mt-0 [&>strong]:inline'>{children}</li>
          ),
          blockquote: ({ children }) => (
            <blockquote
              className={`border-gray-700/50 italic my-6 ${direction === 'rtl' ? 'text-right border-r-4 pr-6' : 'border-l-4 pl-6'
                }`}
            >
              {children}
            </blockquote>
          ),
          pre: ({ children }) => {
            const codeElement =
              children as React.ReactElement<CodeElementProps>;
            const codeContent = codeElement?.props?.children || '';
            const languageClass = codeElement?.props?.className || '';
            const index = btoa(codeContent).substring(0, 10);

            return (
              <div className='relative group my-6'>
                <pre
                  className={`rounded font-mono bg-gray-700/20 text-gray-300 text-sm border border-gray-600/30 p-5 overflow-x-auto md:text-left md:ltr`}
                >
                  <code className={`font-mono text-sm ${languageClass}`}>
                    {codeContent}
                  </code>
                </pre>
                <button
                  onClick={() => handleCopyCode(codeContent, index)}
                  className='absolute top-4 right-4 px-2.5 py-1.5 text-xs rounded bg-gray-700/50 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer'
                >
                  {copiedIndex === index ? 'Copied!' : 'Copy code'}
                </button>
              </div>
            );
          },
          code: ({ children }) => {
            return children;
          },
          strong: ({ children }) => (
            <strong className='font-semibold text-white'>{children}</strong>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              className='text-blue-400 hover:text-blue-300 underline'
              target='_blank'
              rel='noopener noreferrer'
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
