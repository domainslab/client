import DomainCard from 'components/DomainCard';
import Loader from '../../../components/Loader/Loader';
import { useContext, useState } from 'react';
import Button from '../../../components/Button/Button';
import { DomainContext } from '../../../contexts/DomainContext/DomainContextProvider';



const DomainList: React.FC = () => {
  const [localLoading, setLocalLoading] = useState(false)

  const {domains, isLoading, addMoreDomains} = useContext(DomainContext)

  const onButtonClick = ()=>{
    setLocalLoading(true)
    const req = addMoreDomains()
    req.finally(() => setLocalLoading(false))
  }

    return(
      <>
      {isLoading ?(
          <div className="flex flex-col gap-[20px]">
            <div className="flex flex-col items-center mt-[30px]">
              <Loader />
            </div>
          </div>)
         : domains && domains.length>0 ? (
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
              { !localLoading ? (
                <Button {...{ onClick : onButtonClick  }}>Load More...</Button>) : <Loader />
              }
            </div>
          </div>
        ): null}
  </>)
};

export default DomainList;
