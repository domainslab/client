import Card from 'components/Card'

import Status from './Status'
import type { StatusT } from 'components/Card/types'

export type DomainCardProps = {
  title: string,
  isLoading: boolean,
  isAvailable: boolean,
}

const borderColors: Record<StatusT, string> = {
  'Loading': 'border-AccentLight',
  'Available': 'border-SuccessBg',
  'Not Available': 'border-WarningBg',
}

// WIP
const DomainCard: React.FC<DomainCardProps> = ({
  title,
  isAvailable,
  isLoading,
}) => {
  const status: StatusT = (isLoading && 'Loading') || (isAvailable ? 'Available' : 'Not Available')

  return (
    <Card classNames={`flex flex-row justify-between items-center cursor-pointer ${borderColors[status]}`}>
      <p className="text-[1.5rem]">{title}</p>
      <Status status={status} />
    </Card>
  )
}

export default DomainCard;