import React from "react";
import Button from "../button/Button";

const SideBar = () => {
  return (
    <>
      <div className="w-[296px] h-[1100px] sidebar flex flex-col justify-between py-[40px]  ">
        <div className="flex flex-col gap-[60px] px-[20px]">
          <h1 className="text-[36px] text-[#323232] font-[800] leading-[100%] italic">
            LODGN
          </h1>
          <ul className="flex flex-col gap-[10px]">
            <li className="text-[22px] text-[#72AA83] font-[600] py-[20px] leading-[100%] li-border ease-linear duration-300 ">
              Current requests
            </li>
            <li className="text-[22px] text-[#494949] font-[600] py-[20px] leading-[100%] li-border ease-linear duration-300 hover:text-[#72AA83] ">
              Ongoing stays
            </li>
            <li className="text-[22px] text-[#494949] font-[600] py-[20px] leading-[100%] li-border ease-linear duration-300 hover:text-[#72AA83] ">
              Previous stays
            </li>
            <li className="text-[22px] text-[#494949] font-[600] py-[20px] leading-[100%] li-border ease-linear duration-300 hover:text-[#72AA83] ">
              Reports
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-start items-center gap-[20px] pb-[20px]">
          <Button
            title="Log - Out"
            className="w-[231px] h-[70px] text-[22px] text-[#FFFFFF] btn-Color font-[600] leading-[100%] rounded-[10px] cursor-pointer ease-linear duration-300 hover:bg-[#494949] "
          />
          <div className="flex flex-col justify-center items-center gap-[5px]">
            <p className="lato-font text-[18px] text-[#494949] font-[500] leading-[100%]">
              Help-Desk:
            </p>
            <span className="lato-font text-[18px] text-[#494949] font-[500] leading-[100%]">
              786-874 9988
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
