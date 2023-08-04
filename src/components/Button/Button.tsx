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
        className: `px-[38px] py-[19px] rounded-[50px] bg-Primary text-NegativeText font-bold hover:text-Accent ${className}`,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
