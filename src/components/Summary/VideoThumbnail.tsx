import Image from 'next/image';
import Text from '../Typography/Text';
import Heading from '../Typography/Heading';

interface VideoThumbnailProps {
  thumbnail: string;
  title: string;
  channel: string;
}
function VideoThumbnail({ thumbnail, title, channel }: VideoThumbnailProps) {
  return (
    <div className='grid grid-cols-2 gap-6'>
      <div className='relative aspect-video'>
        <Image
          src={thumbnail}
          alt={title}
          fill
          className='rounded-[15px] object-cover'
        />
      </div>
      <div className='my-auto'>
        <Heading level='h2'>{title}</Heading>
        <Text className='mt-4'>
          Channel: <span className='font-semibold'>{channel}</span>
        </Text>
      </div>
    </div>
  );
}

export default VideoThumbnail;
