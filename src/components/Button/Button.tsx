import { PropsWithChildren } from 'react';

const Button: React.FC<PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      {...{
        ...props,
        className: `px-[38px] py-[19px] rounded-[50px] bg-Primary text-NegativeText font-bold transition-colors ease-in-out delay-75 hover:text-MainText hover:bg-Accent  ${className}`,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
