import { useEffect, useState } from 'react'
import DomainCard from './DomainCard'
import axios from 'axios'

const API = 'https://domain-node-88852dc28831.herokuapp.com/api/v1/domain_status' 

type DomainCardContainerProps = {
  title: string,
}

const DomainCardContainer: React.FC<DomainCardContainerProps> = ({
  title,
}) => {
  const [isLoading, setLoading] = useState(true)
  const [isAvailable, setAvailable] = useState<boolean | null>(null)

  useEffect(() => {
    axios.get(API, { params: { domain: title } })
      .then(res => setAvailable(res.data.isAvailable))
      .catch(console.error)

    setLoading(false)
  }, [title])

  return <DomainCard
    title={title}
    isLoading={isLoading}
    isAvailable={isAvailable || false}
  />
}

export default DomainCardContainer;