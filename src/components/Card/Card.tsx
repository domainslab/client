import { twMerge } from 'tailwind-merge'

type CardProps = {
  children: React.ReactNode,
  classNames?: string,
}

const Card: React.FC<CardProps> = ({
  children,
  classNames = '',
}) => {
  const cardClassNames = twMerge('rounded-[30px] p-[20px] bg-LightBg1 border-2 border-StrokeColor', classNames)

  return (
    <div className={cardClassNames}>
      {children}
    </div>
  ) 
}

export default Card