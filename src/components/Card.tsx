import Icon from "./Icon/Icon";
import { IconName } from "./Icon/types/icon";
import Heading from "./Typography/Heading";
import Text from "./Typography/Text";

export interface CardProps {
	icon: IconName;
	title: string;
	description: string;
}

function Card({ icon, title, description }: CardProps) {
	return (
		<a className="flex flex-col p-8 bg-[#0C0C0C] rounded-[15px] border gap-3 cursor-pointer hover:border-primary transition-all">
			<Icon icon={icon} props={{ className: 'w-12 h-auto text-white/70' }} />
			<Heading level="h3">{title}</Heading>
			<Text>{description}</Text>
		</a>
	)
}

export default Card;