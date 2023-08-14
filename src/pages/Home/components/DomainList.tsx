import DomainCard from 'components/DomainCard';
import { Domain } from 'types/domains';

type DomainListProps = { domains: Domain[] };

const DomainList: React.FC<DomainListProps> = ({ domains }) => {
  return (
    <ul className="px-[40px] space-y-[25px] max-lg:px-0">
      {domains.map(title => {
        return (
          <li key={title}>
            <DomainCard title={title} />
          </li>
        );
      })}
    </ul>
  );
};

export default DomainList;
