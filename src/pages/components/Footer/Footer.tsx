import Separator from "components/Separator/Separator";

// TODO: add dot betweem list items
const Footer: React.FC = () => (
  <footer className="mt-[60px] px-[20px] sm:px-[40px] md:px-[50px]">
    <Separator />
    <div className="py-[30px] flex justify-between text-base items-center opacity-50 font-bold">
      <div>
        <ul className="list-none flex flex-row space-x-[52px] cursor-pointer">
          <li><a>Terms&Conditions</a></li>
          <li><a>Policy</a></li>
        </ul>
      </div>
      <div>
        logo
      </div>
    </div>
  </footer>
);

export default Footer;
