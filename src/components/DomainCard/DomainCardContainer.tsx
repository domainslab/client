import { useEffect, useState } from 'react';
import DomainCard from './DomainCard';
import { getDomainStatus } from 'services/api/GetDomainStatus';

type DomainCardContainerProps = {
  title: string;
};

const DomainCardContainer: React.FC<DomainCardContainerProps> = ({ title }) => {
  const [isLoading, setLoading] = useState(true);
  const [isAvailable, setAvailable] = useState<boolean | null>(null);

  useEffect(() => {
    getDomainStatus(title)
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
