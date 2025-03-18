import Text from '../Typography/Text';

interface SummaryContentProps {
  text: string;
}

function SummaryContent({ text }: SummaryContentProps) {
  const paragraphs = text
    .split('\n')
    .filter((paragraph) => paragraph.trim() !== '');

  return (
    <div className='flex flex-col gap-6'>
      {paragraphs.map((paragraph, index) => (
        <Text key={index} className='leading-8 mb-4'>
          {paragraph}
        </Text>
      ))}
    </div>
  );
}

export default SummaryContent;
