import React from "react";

export default function Home() {
  return (
    <div className="max-w-[1580px] mx-auto transition-all ease duration-800">
      <div className="mt-[215px] flex lg:justify-center items-start px-2">
        <div className="hero-1">
          <p className=" lg:max-w-[1054px] max-w-[731px] md:leading-[80px] xl:leading-[100px] leading-[40px] xl:text-[90px] md:text-[80px] text-[40px] text-start">
            Biz bilan birga biznesingizni yangi bosqichga olib chiqing!
          </p>
          <button className="cursor-pointer lg:w-[290px] w-[191px]  h-[60px] rounded-[20px] hover:border-[#808080]  border-[1px] border-white font-normal md:text-[25px] text-[17px] tracking-[-2px] flex justify-center items-center mt-[131px] ">
            Bog'lanish
          </button>
        </div>
        <p className="lg:flex hidden font-medium xl:text-[200px] text-[150px] transform rotate-[7deg] text-white text-shadow-down">
          77grd
        </p>
      </div>
      <div></div>
    </div>
  );
}
