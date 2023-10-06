import { useEffect, useState } from 'react';
import DomainCard from './DomainCard';
import { getDomainStatusRequest } from '../../services/api/RequestAvailability';



type DomainCardContainerProps = {
  title: string;
};

const DomainCardContainer: React.FC<DomainCardContainerProps> = ({ title }) => {
  const [isLoading, setLoading] = useState(true);
  const [isAvailable, setAvailable] = useState<boolean | null>(null);

  useEffect(() => {
    getDomainStatusRequest(title)
      .then(res => setAvailable(res.data.isAvailable))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [title]);

  return (
    <DomainCard
      title={title}
      isLoading={isLoading}
      isAvailable={isAvailable || false}
    />
  );
};

export default DomainCardContainer;
