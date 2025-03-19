import Text from './Typography/Text';

interface WordCountProps {
  text: string;
  className?: string;
}

function WordCount({ text, className }: WordCountProps) {
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

  return (
    <Text className={className || ''}>
      <span className='font-semibold'>{wordCount}</span> Words
    </Text>
  );
}

export default WordCount;
