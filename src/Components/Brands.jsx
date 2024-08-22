import { SiNike, SiAdidas, SiPuma, SiTesla,SiBentley } from "react-icons/si";

const Brands = () => {
  return (
    <>
      <hr className="mt-[25%]" />
      <div className="flex items-center my-10 justify-center">
        <div className="flex items-center gap-32">
          <SiAdidas className="w-[80px] h-[70px] duration-500 text-slate-500 hover:text-black hover:duration-500 cursor-pointer"  />
          <SiNike className="w-[80px] h-[70px] duration-500 text-slate-500 hover:text-black hover:duration-500 cursor-pointer"  />
          <SiPuma className="w-[80px] h-[70px] duration-500 text-slate-500 hover:text-black hover:duration-500 cursor-pointer"  />
          <SiTesla className="w-[80px] h-[70px] duration-500 text-slate-500 hover:text-black hover:duration-500 cursor-pointer"  />
          <SiBentley className="w-[80px] h-[70px] duration-500 text-slate-500 hover:text-black hover:duration-500 cursor-pointer"  />
        </div>
      </div>
    </>
  );
};

export default Brands;
