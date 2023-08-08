import { forwardRef } from 'react';

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>;

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <input
      {...{
        ...props,
        ref,
        type: 'text',
        className: `py-[10px] px-[20px] rounded-[50px] w-full border-2 border-StrokeColor bg-LightBg2 placeholder:text-Secondary placeholder:font-semibold focus:border-Secondary focus:outline-none focus:shadow-none ${className}`,
      }}
    />
  );
});

export default Input;
