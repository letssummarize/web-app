import { SvgIconProps } from "./types/icon";

function Text({ ...props }: SvgIconProps) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m9 6h3.5V7h-9v2H11v8h2z" /></svg>
    )
}


export default Text;