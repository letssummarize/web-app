import Api from "@/components/icon/Api";
import Document from "@/components/icon/Document";
import Github from "@/components/icon/Github";
import Text from "@/components/icon/Text";
import { SvgIconProps } from "@/components/icon/types/icon";
import YouTube from "@/components/icon/Youtube";

export type IconName = 'document' | 'youtube' | 'text' | 'github' | 'api';

export function getIconComponent({icon, props}: {icon: IconName, props?: SvgIconProps}) {
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
        default: 
            return null;
    }
}