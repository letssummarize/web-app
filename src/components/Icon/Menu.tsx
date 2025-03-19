import { SvgIconProps } from "./types/Icon";

function Menu({ ...props }: SvgIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M3 6h18a1 1 0 100-2H3a1 1 0 000 2zm18 5H3a1 1 0 100 2h18a1 1 0 100-2zm0 7H3a1 1 0 100 2h18a1 1 0 100-2z" />
    </svg>
  );
}

export default Menu;
