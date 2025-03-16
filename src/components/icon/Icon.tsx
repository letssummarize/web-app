import React from 'react';
import Api from '@/components/Icon/Api';
import Document from '@/components/Icon/Document';
import Github from '@/components/Icon/Github';
import Text from '@/components/Icon/Text';
import YouTube from '@/components/Icon/Youtube';
import AI from './AI';
import { IconName, SvgIconProps } from './types/icon';
import Filter from './Filter';
import Sound from './Sound';

function Icon({ icon, props }: { icon: IconName; props?: SvgIconProps }) {
  switch (icon) {
    case 'document':
      return <Document {...props} />;
    case 'youtube':
      return <YouTube {...props} />;
    case 'text':
      return <Text {...props} />;
    case 'github':
      return <Github {...props} />;
    case 'api':
      return <Api {...props} />;
    case 'ai':
      return <AI {...props} />;
    case 'filter':
      return <Filter {...props} />;
    case 'sound':
      return <Sound {...props} />;
    default:
      return null;
  }
}

export default Icon;
