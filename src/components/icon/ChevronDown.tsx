import { SvgIconProps } from './types/icon';

function ChevronDown({ ...props }: SvgIconProps) {
  return (
    <svg {...props} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25 24'>
      <path
        fill='currentColor'
        d='M5.548 9.095a.75.75 0 0 1 1.06 0l5.72 5.72l5.72-5.72a.75.75 0 0 1 1.06 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0l-6.25-6.25a.75.75 0 0 1 0-1.06'
      ></path>
    </svg>
  );
}

export default ChevronDown;
