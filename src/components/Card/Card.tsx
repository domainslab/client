import { twMerge } from 'tailwind-merge';

type CardProps = {
  children: React.ReactNode;
  classNames?: string;
};

const Card: React.FC<CardProps> = ({ children, classNames = '' }) => {
  const cardClassNames = twMerge(
    'rounded-[20px] p-[15px] pl-[25px]  bg-LightBg2 border-2 border-StrokeColor',
    classNames
  );

  return <div className={cardClassNames}>{children}</div>;
};

export default Card;
