import { twMerge } from 'tailwind-merge'

const Separator: React.FC<{ classNames?: string }> = ({
  classNames,
}) => {
  const separatorClassNames = twMerge("h-[2px] border-white border-opacity-20", classNames)

  return <hr className={separatorClassNames} />
}

export default Separator