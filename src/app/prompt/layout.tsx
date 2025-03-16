import Container from '@/components/Container';

export default function PromptLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      <div className='flex flex-col gap-[80px]'>{children}</div>
    </Container>
  );
}
