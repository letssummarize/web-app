import Text from '../Typography/Text';
import ReactMarkdown from 'react-markdown';
import { useState, useCallback } from 'react';
import type { ReactNode } from 'react';

interface SummaryContentProps {
  text: string;
}

type ComponentType = {
  children?: ReactNode;
  node?: any;
  className?: string;
  [key: string]: any;
};

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

  // const testMarkdown = `
  // # Heading 1
  // ## Heading 2
  // ### Heading 3

  // This is a paragraph with **bold** and *italic* text.

  // - Unordered list item 1
  // - Unordered list item 2

  // 1. Ordered list item 1
  // 2. Ordered list item 2

  // > This is a blockquote

  // \`\`\`js
  // console.log("This is a code block");
  // const x = 10;
  // function hello() {
  //   return "Hello, world!";
  // }
  // \`\`\`

  // This is an \`inline code\` example.

  // [This is a link](https://example.com)
  // `;

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
            const codeElement =
              children as React.ReactElement<CodeElementProps>;
            const codeContent = codeElement?.props?.children || '';
            const languageClass = codeElement?.props?.className || '';
            const index = btoa(codeContent).substring(0, 10);

            return (
              <div className='relative group'>
                <pre className='rounded font-mono bg-gray-700/20 text-gray-300 text-sm border border-gray-600/30 p-4 mb-4 overflow-x-auto'>
                  <code className={`font-mono text-sm ${languageClass}`}>
                    {codeContent}
                  </code>
                </pre>
                <button
                  onClick={() => handleCopyCode(codeContent, index)}
                  className='absolute top-3 right-3 px-2 py-1 text-xs rounded bg-gray-700/50 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer'
                >
                  {copiedIndex === index ? 'Copied!' : 'Copy code'}
                </button>
              </div>
            );
          },
          code: ({ inline, children }: ComponentType) => {
            if (inline) {
              return (
                <code className='font-mono text-sm bg-gray-700/30 px-1 py-0.5 rounded'>
                  {children}
                </code>
              );
            }
            return children;
          },
          a: ({ href, children }: ComponentType) => (
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
        {/* {testMarkdown} */}
        {text}
      </ReactMarkdown>
    </div>
  );
}

export default SummaryContent;
