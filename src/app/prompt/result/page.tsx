'use client';

import Divider from '@/components/Divider';
import PromptBox from '@/components/PromptBox/PromptBox';
import SummaryContent from '@/components/Summary/SummaryContent';
import SummaryFooter from '@/components/Summary/SummaryFooter';
import VideoThumbnail from '@/components/Summary/VideoThumbnail';
import { useSummary } from '@/hooks/useSummary';
import { getPromptBoxType } from '@/util/getPromptBoxType';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function SummaryResultPage() {
  const router = useRouter();
  const {
    isLoading,
    error,
    summary,
    summarizeVideo,
    sourceContent,
    hasLoadedFromStorage,
  } = useSummary();
  console.log(
    'summary from result ',
    summary,
    'hasLoadedFromStorage:',
    hasLoadedFromStorage
  );

  useEffect(() => {
    if (hasLoadedFromStorage && !summary && !isLoading) {
      console.log(
        'Redirecting to home because no summary found after localStorage load'
      );
      router.push('/');
    }
  }, [summary, router, hasLoadedFromStorage, isLoading]);

  if (!hasLoadedFromStorage) {
    return <p className='text-center'>Loading your summary...</p>;
  }

  if (!summary || !sourceContent) {
    return null;
  }

  const handleSubmit = (input: string) => {
    if (getPromptBoxType(sourceContent.type) === 'url') {
      summarizeVideo(input);
    }
  };

  return (
    <>
      {isLoading && <p className='text-center mt-4'>Loading your summary...</p>}
      {error && <p className='text-center mt-4 text-red-500'>{error}</p>}

      <div className='flex flex-col gap-[40px]'>
        {sourceContent?.type === 'video' && (
          <VideoThumbnail
            thumbnail='/images/yt-thumb.png'
            title='Microsoft goes nuclear on TypeScript codebase…'
            channel='Fireship'
          />
        )}

        {summary && <SummaryContent text={summary.summary.summary} />}

        <Divider />

        {summary && (
          <SummaryFooter contentToCountItsWords={summary.summary.summary} />
        )}
      </div>

      <PromptBox
        onSubmit={handleSubmit}
        type={getPromptBoxType(sourceContent.type)}
        value={sourceContent?.type === 'video' ? sourceContent.content : ''}
      />
    </>
  );
}
