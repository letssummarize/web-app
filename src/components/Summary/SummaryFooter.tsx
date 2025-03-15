import Button from '../Button';
import WordCount from '../WordCount';

function SummaryFooter({ content }: { content: string }) {
  return (
    <div className='flex items-center justify-between'>
      <Button
        variant='outlined'
        radius='full'
        size='sm'
        label='Read aloud'
        icon='sound'
      />
      {content && <WordCount text={content} />}
    </div>
  );
}

export default SummaryFooter;
