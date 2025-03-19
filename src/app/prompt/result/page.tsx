'use client';

import Divider from '@/components/Divider';
import PromptSection from '@/components/PromptSection';
import ServicesCards from '@/components/ServicesCards';
import SummaryContent from '@/components/Summary/SummaryContent';
import SummaryFooter from '@/components/Summary/SummaryFooter';
import VideoThumbnail from '@/components/Summary/VideoThumbnail';
import { useSummary } from '@/hooks/useSummary';
import { getPromptBoxType } from '@/util/getPromptBoxType';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function SummaryResultPage() {
  const router = useRouter();
  const { isLoading, error, data, sourceContent, hasLoadedFromStorage } =
    useSummary();

  useEffect(() => {
    if (hasLoadedFromStorage && !data && !isLoading) {
      router.push('/');
    }
  }, [data, router, hasLoadedFromStorage, isLoading]);

  if (!hasLoadedFromStorage) {
    return <p className='text-center'>Loading your summary...</p>;
  }

  if (!data || !sourceContent) {
    return null;
  }

  return (
    <>
      {isLoading && <p className='text-center mt-4'>Loading your summary...</p>}
      {error && <p className='text-center mt-4 text-red-500'>{error}</p>}

      <div className='flex flex-col gap-[40px]'>
        {sourceContent?.type === 'youtube' && data?.videoMetadata && (
          <VideoThumbnail
            thumbnail={data.videoMetadata.thumbnail || ''}
            title={data.videoMetadata.title || ''}
            channel={data.videoMetadata.channelName || ''}
          />
        )}

        {data?.summary ? (
          <SummaryContent text={data.summary} />
        ) : isLoading ? null : (
          <p className='text-center text-red-500'>
            No summary content available
          </p>
        )}

        <Divider />

        {data?.summary && (
          <SummaryFooter
            contentToCountItsWords={data.summary}
            audioUrl={data.audioFilePath}
          />
        )}
      </div>

      <PromptSection
        value={sourceContent.content}
        promptBoxType={getPromptBoxType(sourceContent.type)}
        showHeading={false}
      />

      <Divider />
      <ServicesCards exclude={sourceContent.type} />
    </>
  );
}
