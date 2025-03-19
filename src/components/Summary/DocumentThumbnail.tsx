'use client';

import Text from '../Typography/Text';
import Icon from '../Icon/Icon';

interface DocumentThumbnailProps {
  title: string;
}

function DocumentThumbnail({ title }: DocumentThumbnailProps) {
  if (!title) {
    return null;
  }

  return (
    <div
      className='border border-white/10 rounded-[15px] p-4'
    >
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <Icon icon="document" props={{ className: 'w-8 h-auto text-white/50' }} />
            <Text><span className='font-medium'>{title}</span></Text>
        </div>
      </div>
    </div>
  );
}

export default DocumentThumbnail;
