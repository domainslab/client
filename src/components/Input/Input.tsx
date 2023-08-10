import { forwardRef } from 'react';

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  isTextarea?: boolean;
};

const baseInputClassNames =
  'py-[10px] px-[20px] w-full border-2 border-StrokeColor bg-LightBg2 placeholder:text-Secondary placeholder:font-semibold focus:border-Secondary focus:outline-none focus:shadow-none';

// FIXME later
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Input = forwardRef<any, InputProps>(({ className, isTextarea, ...props }, ref) => {
  if (isTextarea) {
    return (
      <textarea
        {...{
          ref,
          className: `resize-none rounded-[20px] ${baseInputClassNames} ${className}`,
        }}
      />
    );
  }

  return (
    <input
      {...{
        ...props,
        ref,
        type: 'text',
        className: `rounded-[50px] ${baseInputClassNames} ${className}`,
      }}
    />
  );
});

export default Input;
