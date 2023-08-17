import { ReactComponent as GoDaddyLogo } from 'assets/images/godaddy-logo.svg';
import { ReactComponent as OpenAILogo } from 'assets/images/openai-logo.svg';

const Heading: React.FC = () => (
  <div className="flex flex-col gap-[30px]">
    <h1 className="flex justify-center text-[3.75rem] leading-[normal] font-extrabold text-transparent bg-clip-text gradient-title max-lg:text-[3.125rem] max-sm:text-[1.875rem]">
      Type your project ideas
    </h1>
    <div className="flex gap-[40px] justify-center">
      <GoDaddyLogo className="h-[22px]" />
      <OpenAILogo className="h-[22px]" />
    </div>
  </div>
);

export default Heading;
