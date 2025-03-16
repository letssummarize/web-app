'use client';

import Divider from '@/components/Divider';
import PromptBox from '@/components/PromptBox/PromptBox';
import SummaryContent from '@/components/Summary/SummaryContent';
import SummaryFooter from '@/components/Summary/SummaryFooter';
import VideoThumbnail from '@/components/Summary/VideoThumbnail';

export default function SummaryResultPage() {
  return (
    <>
      <div className='flex flex-col gap-[40px]'>
        <VideoThumbnail
          thumbnail='/images/yt-thumb.png'
          title='Microsoft goes nuclear on TypeScript codebase…'
          channel='Fireship'
        />

        <div className='flex flex-col gap-6'>
          <SummaryContent text='In a surprising announcement, Microsoft revealed that it is completely reprogramming TypeScript, a crucial language in modern web development. The current TypeScript compiler, which is written in TypeScript itself, has limitations in low-level optimizations. To address this, Microsoft has chosen to rewrite the compiler in Go, a language developed by Google, known for its simplicity and efficiency. This change is expected to significantly improve performance, reducing compile times from 70 seconds to just 7 seconds in some cases.' />
          <SummaryContent text="The decision to use Go is attributed to its compiled nature, which allows for optimized machine code generation, and its automatic memory management, making it easier to work with compared to languages like C++ or Rust. The rewrite is not just a complete overhaul but a porting process that aims to preserve the original behavior and semantics of TypeScript. Although the new compiler won't be available until TypeScript 7, the move is seen as a strategic choice by Microsoft to prioritize performance and portability over using in-house languages or jumping on current trends." />
        </div>

        <Divider />

        <SummaryFooter
          content="In a surprising announcement, Microsoft revealed that it is completely reprogramming TypeScript, a crucial language in modern web development. The current TypeScript compiler, which is written in TypeScript itself, has limitations in low-level optimizations. To address this, Microsoft has chosen to rewrite the compiler in Go, a language developed by Google, known for its simplicity and efficiency. This change is expected to significantly improve performance, reducing compile times from 70 seconds to just 7 seconds in some cases.
The decision to use Go is attributed to its compiled nature, which allows for optimized machine code generation, and its automatic memory management, making it easier to work with compared to languages like C++ or Rust. The rewrite is not just a complete overhaul but a porting process that aims to preserve the original behavior and semantics of TypeScript. Although the new compiler won't be available until TypeScript 7, the move is seen as a strategic choice by Microsoft to prioritize performance and portability over using in-house languages or jumping on current trends."
        />
      </div>

      <PromptBox
        type='url'
        onSubmit={() => {}}
        value='https://www.youtube.com/watch?v=PQ2WjtaPfXU'
      />
    </>
  );
}
