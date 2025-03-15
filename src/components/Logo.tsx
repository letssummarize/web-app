import Image from "next/image";
import Link from "next/link";

export interface Logo {
    src: string;
    alt: string;
    link: string;
}

function Logo({ src, alt, link }: Logo) {
    return (
        <Link href={link} className="flex items-center space-x-2">
            <div className="relative">
                <Image src={src} alt={alt} width={167} height={40} />
            </div>
        </Link>
    )
}

export default Logo;