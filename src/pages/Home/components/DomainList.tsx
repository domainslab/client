import DomainCard from 'components/DomainCard';
import { useContext } from 'react';
import { DomainContext } from 'contexts/DomainContext/DomainContext.ts';
import { DomainContextType } from 'contexts/DomainContext/DomainContextType.ts';

const DomainList: React.FC = () => {
  const { domains } = useContext<DomainContextType>(DomainContext);

  return (
    <>
      <div className="flex flex-col gap-[20px]">
        <h3 className="font-bold text-[1.625rem]">Take a look at what we've generated for you</h3>
        <ul className="px-[40px] space-y-[25px] max-lg:px-0">
          {domains.map(title => {
            return (
              <li key={title}>
                <DomainCard title={title} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default DomainList;
