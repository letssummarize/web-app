'use client';

import Container from "@/components/Container";
import Divider from "@/components/Divider";
import PromptSection from "@/components/PromptSection";
import ServicesCards from "@/components/ServicesCards";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col gap-[80px]">
        <PromptSection />
        <Divider />
        <ServicesCards exclude="youtube" />
      </div>
    </Container>
  );
}
