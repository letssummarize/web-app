'use client';

import Divider from '@/components/Divider';
import PromptSection from '@/components/PromptSection';
import ServicesCards from '@/components/ServicesCards';
import SummaryContent from '@/components/Summary/SummaryContent';
import SummaryFooter from '@/components/Summary/SummaryFooter';
import VideoThumbnail from '@/components/Summary/VideoThumbnail';
import TextThumbnail from '@/components/Summary/TextThumbnail';
import Heading from '@/components/Typography/Heading';
import { useSummary } from '@/hooks/useSummary';
import { getFullAudioFilePath } from '@/util/getFullAudioFilePath';
import { getPromptBoxType } from '@/util/getPromptBoxType';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import DocumentThumbnail from '@/components/Summary/DocumentThumbnail';

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

        {sourceContent?.type === 'text' && (
          <TextThumbnail
            content={sourceContent.content}
            wordCount={sourceContent.content.split(/\s+/).length}
          />
        )}

        {sourceContent?.type === 'document' && (
          <DocumentThumbnail
            title={sourceContent.fileName || 'Document.pdf'}
            pageCount={sourceContent.content.split('\n').length}
            fileSize={`${Math.round(sourceContent.content.length / 1024)} KB`}
          />
        )}

        {data?.summary ? (
          <SummaryContent text={data.summary} />
        ) : isLoading ? null : (
          <p className='text-center text-red-500'>
            Failed to generate summary. Please try again.
          </p>
        )}

        <Divider />

        {data?.summary && (
          <SummaryFooter
            contentToCountItsWords={data.summary}
            audioUrl={getFullAudioFilePath(data.audioFilePath as string)}
          />
        )}
      </div>

      <PromptSection
        value={sourceContent.content}
        promptBoxType={getPromptBoxType(sourceContent.type)}
        uploadedFile={sourceContent.type === 'document' && sourceContent.fileName ? new File([sourceContent.content], sourceContent.fileName, { type: 'text/plain' }) : null}
        showHeading={false}
      />

      <Divider />
      <ServicesCards exclude={sourceContent.type} />
    </>
  );
}
