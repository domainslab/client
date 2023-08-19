import { PropsWithChildren } from 'react';

const Button: React.FC<PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>> = ({
  children,
  className,
  disabled,
  ...props
}) => {
  return (
    <button
      {...{
        ...props,
        disabled,
        className: `text-[1.125rem] leading-[1.125rem] px-[38px] py-[19px] rounded-[50px] bg-Primary text-NegativeText font-bold transition-colors ease-in-out delay-75 hover:text-MainText hover:bg-Accent ${
          disabled ? 'pointer-events-none' : ''
        } ${className}`,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
