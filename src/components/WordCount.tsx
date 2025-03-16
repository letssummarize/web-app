import Text from './Typography/Text';

interface WordCountProps {
  text: string;
}

function WordCount({ text }: WordCountProps) {
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

  return (
    <Text>
      <span className='font-semibold'>{wordCount}</span> Words
    </Text>
  );
}

export default WordCount;
