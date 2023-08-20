import { useEffect, useState } from 'react';
import DomainCard from './DomainCard';
import axios from 'axios';
import { getRequestSignature } from 'utils/getRequestSignature';

const API = 'https://api.domainslab.ai/v1/domain_status';

type DomainCardContainerProps = {
  title: string;
};

const DomainCardContainer: React.FC<DomainCardContainerProps> = ({ title }) => {
  const [isLoading, setLoading] = useState(true);
  const [isAvailable, setAvailable] = useState<boolean | null>(null);

  useEffect(() => {
    axios
      .get(API, {
        params: { domain: title },
        headers: {
          'X-DomainsLab-Auth': getRequestSignature(),
        },
      })
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
