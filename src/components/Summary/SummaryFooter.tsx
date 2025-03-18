import Button from '../Button';
import WordCount from '../WordCount';

function SummaryFooter({ contentToCountItsWords }: { contentToCountItsWords: string }) {
  return (
    <div className='flex items-center justify-between'>
      <Button
        variant='outlined'
        radius='full'
        size='sm'
        label='Read aloud'
        icon='sound'
      />
      {contentToCountItsWords && <WordCount text={contentToCountItsWords} />}
    </div>
  );
}

export default SummaryFooter;
