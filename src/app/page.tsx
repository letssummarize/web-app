import Container from '@/components/Container';
import PromptVideoPage from './prompt/video/page';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Image
        src='/images/body-blur.png'
        alt=''
        aria-hidden='true'
        className='absolute -top-[700px] left-1/2 -translate-x-1/2 -z-0 pointer-events-none opacity-80'
        width={2000}
        height={1000}
      />
      <div className='relative z-1 h-full flex flex-col space-y-[160px]'>
        <Navbar />
        <Container>
          <div className='flex flex-col gap-[80px]'><PromptVideoPage /></div>
        </Container>
        <Footer />
      </div>
    </>
  );
}
