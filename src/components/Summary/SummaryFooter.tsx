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
      {audioUrl && <ReadAloudButton audioUrl={audioUrl} />}
      {contentToCountItsWords && <WordCount className="ml-auto" text={contentToCountItsWords} />}
    </div>
  );
}

export default SummaryFooter;
