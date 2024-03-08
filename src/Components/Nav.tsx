import dashes from "../assets/images/Line.svg";
import { IoCheckmarkCircle, IoCheckmarkCircleOutline } from "react-icons/io5";
type propsType = {
  id: number;
  title: string;
  content: string;
  poll: string;
  active: boolean;
  step: string;
};
const Nav = ({ id, title, content, poll, active }: propsType) => {
  return (
    <div className="Nav flex gap-4 mb-0.5">
      <div className="flex flex-col items-center justify-start gap-[-3.5rem] mt-[-0.05rem]">
        {active ? (
          <IoCheckmarkCircle className="w-6 h-6 fill-gray-800" />
        ) : (
          <IoCheckmarkCircleOutline className="w-6 h-6 fill-gray-600" />
        )}
        {id !== 2 && <img className="w-0.5 mt-[-.25rem]" src={dashes} alt="" />}
      </div>
      <div
        className="rec bg-[${poll}] w-[5px] h-20 rounded rounded-sm"
        style={{ backgroundColor: poll }}
      ></div>
      <div>
        <h3 className="text-lg font-extrabold uppercase">{title}</h3>
        <span className="mt-1 font-normal text-zinc-600 text-sm leading-[0.7]">
          {content}
        </span>
      </div>
    </div>
  );
};

export default Nav;
