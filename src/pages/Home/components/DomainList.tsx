import DomainCard from 'components/DomainCard';
import { useContext } from 'react';
import Button from 'components/Button/Button';
import { DomainContext } from 'contexts/DomainContext/DomainContext';


const DomainList: React.FC = () => {

  const {domains, isLoading, setLoading, addMoreDomains} = useContext(DomainContext)

  const onButtonClick = ()=>{
    setLoading(true)
    const req = addMoreDomains()
    req.finally(() => setLoading(false))
  }

    return(
      <>
          <div className="flex flex-col gap-[20px]">
            <h3 className="font-bold text-[1.625rem]">
              Take a look at what we've generated for you
            </h3>
            <ul className="px-[40px] space-y-[25px] max-lg:px-0">
              {domains.map(title => {
                return (
                  <li key={title}>
                    <DomainCard title={title} />
                  </li>
                );
              })}
            </ul>
            <div className="flex flex-col gap-[20px] mx-auto">
              { !isLoading && (
                <Button onClick={onButtonClick}>Load More...</Button>)
              }
            </div>
          </div>
  </>)
};

export default DomainList;
