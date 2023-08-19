import { forwardRef } from 'react';

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  isTextarea?: boolean;
  error?: boolean;
};

const baseInputClassNames =
  'h-[56px] text-[1.125rem] py-[10px] px-[20px] w-full border-2 border-StrokeColor bg-LightBg2 placeholder:text-Secondary placeholder:font-semibold focus:border-Secondary focus:outline-none focus:shadow-none transition-[border] ease-in delay-75';

const errorClassNames = '!border-AccentLight';

// FIXME later
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Input = forwardRef<any, InputProps>(({ className, isTextarea, error, ...props }, ref) => {
  if (isTextarea) {
    return (
      <textarea
        {...{
          ref,
          className: `resize-none rounded-[20px] ${
            error ? errorClassNames : ''
          } ${baseInputClassNames} ${className}`,
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
        className: `rounded-[50px] ${
          error ? errorClassNames : ''
        } ${baseInputClassNames} ${className}`,
      }}
    />
  );
});

export default Input;
