import DomainCard from 'components/DomainCard';

const DomainList: React.FC<{ domains: string[] }> = ({
  domains
}) => {
  return (
    <ul className='space-y-[20px]'>
      {
        domains.map((title) => {
          return <li key={title}><DomainCard title={title}/></li>
        })
      }
    </ul>
  )
}

export default DomainList