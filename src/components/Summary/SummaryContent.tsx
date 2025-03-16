import Text from '../Typography/Text';

interface SummaryContentProps {
  text: string;
}

function SummaryContent({ text }: SummaryContentProps) {
  return <Text className='leading-8'>{text}</Text>;
}

export default SummaryContent;
