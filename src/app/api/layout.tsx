import Container from '@/components/Container';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar/Navbar';

export default function ApiDocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className='relative z-1 h-full flex flex-col space-y-[160px]'>
        <Navbar />
        <Container>
          <div className="space-y-4">
            {children}
          </div>
        </Container>
        <Footer />
      </div>
    </>
  );
}
