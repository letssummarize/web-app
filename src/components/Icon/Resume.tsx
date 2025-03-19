import { SvgIconProps } from './types/Icon';

function Resume({ ...props }: SvgIconProps) {
  return (
    <svg {...props} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
      <path
        fill='currentColor'
        d='M6 17V7q0-.425.288-.712T7 6t.713.288T8 7v10q0 .425-.288.713T7 18t-.712-.288T6 17m5.525.1q-.5.3-1.012 0T10 16.225v-8.45q0-.575.513-.875t1.012 0l7.05 4.25q.5.3.5.85t-.5.85z'
      ></path>
    </svg>
  );
}

export default Resume;
