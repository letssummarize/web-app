import { SvgIconProps } from './types/Icon';

function Pause({ ...props }: SvgIconProps) {
  return (
    <svg {...props} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
      <path
        fill='currentColor'
        d='M16 19q-.825 0-1.412-.587T14 17V7q0-.825.588-1.412T16 5t1.413.588T18 7v10q0 .825-.587 1.413T16 19m-8 0q-.825 0-1.412-.587T6 17V7q0-.825.588-1.412T8 5t1.413.588T10 7v10q0 .825-.587 1.413T8 19'
      ></path>
    </svg>
  );
}

export default Pause;
