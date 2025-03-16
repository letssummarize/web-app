import Container from '@/components/Container';
import PromptVideoPage from './prompt/video/page';

export default function Home() {
  return (
    <Container>
      <div className='flex flex-col gap-[80px]'>
        <PromptVideoPage />
      </div>
    </Container>
  );
}
