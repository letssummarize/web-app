import ReadAloudButton from '../ReadAloudButton';
import WordCount from '../WordCount';

interface SummaryFooterProps {
  contentToCountItsWords: string;
  audioUrl?: string;
}

function SummaryFooter({
  contentToCountItsWords,
  audioUrl,
}: SummaryFooterProps) {
  return (
    <div className='flex items-center justify-between'>
      <ReadAloudButton audioUrl={audioUrl} />
      {contentToCountItsWords && <WordCount text={contentToCountItsWords} />}
    </div>
  );
}

export default SummaryFooter;
