import Container from './Container';
import Github from './Icon/Github';

const Footer = () => {
  return (
    <footer className='py-8'>
      <Container classNames='flex justify-between items-center' wide>
        <span className='text-sm font-light'>
          © 2025 <strong className='font-semibold'>Let's Summarize</strong>
        </span>

        <a
          href='https://github.com'
          target='_blank'
          rel='noopener noreferrer'
          className='text-sm font-light flex items-center space-x-2 border-b pb-1'
        >
          <span>Explore our repository on</span>
          <Github className={`w-5 h-auto opacity-80`} />
          <span>Github</span>
        </a>
      </Container>
    </footer>
  );
};

export default Footer;
