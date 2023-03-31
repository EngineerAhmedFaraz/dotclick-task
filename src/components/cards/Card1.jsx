import React from "react";

const Card1 = () => {
  return (
    <>
      <div className="w-[1114px] h-[226px] card-one flex flex-col justify-center items-start gap-[40px] px-[30px]">
        <div className="grid grid-cols-3 justify-center items-center gap-[40px]">
          <div className="flex flex-col gap-[10px]">
            <h1 className="lato-font  text-[30px] text-[#48AF78] font-[700] leading-[100%]">
              St Judes Hospital
            </h1>
            <span className="lato-font  text-[16px] text-[#959595] font-[500] leading-[100%]">
              Sarasota,FL. 33178
            </span>
          </div>
          <div className="flex justify-center items-center gap-[15px] hr-line  ">
            <div className="flex flex-col gap-[10px]">
              <h1 className="lato-font  text-[28px] text-[#48AF78] font-[700] leading-[100%]">
                10
              </h1>
              <span className="lato-font  text-[18px] text-[#959595] font-[500] leading-[100%]">
                October
              </span>
            </div>
            <div>
              <span className="lato-font  items-start text-[28px] text-[#48AF78] font-[700] leading-[100%]">
                -
              </span>
            </div>
            <div className="flex flex-col gap-[10px]">
              <h1 className="lato-font  text-[28px] text-[#48AF78] font-[700] leading-[100%]">
                17
              </h1>
              <span className="lato-font  text-[18px] text-[#959595] font-[500] leading-[100%]">
                December
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <h1 className="lato-font  text-[30px] text-[#48AF78] font-[700] leading-[100%]">
              20 Rooms
            </h1>
            <span className="lato-font  text-[16px] text-[#959595] font-[500] leading-[100%]">
              10 Singles, 10 doubles
            </span>
          </div>
        </div>
        <div className="w-[1072px] h-[48px] border-[1px] border-solid border-[#959595] rounded-[24px] overflow-hidden grid grid-cols-3 ">
          <div className="border-[1px] border-solid border-[#FDF307] bg-[#FDF307] flex justify-start items-center pl-[1rem]">
            <span className="lato-font text-[17px] text-[#959595] font-[500] leading-[100%]">
              RECEIVED
            </span>
          </div>
          <div className="border-[1px] border-solid border-[] flex justify-center items-center pl-[1rem]">
            <span className="lato-font text-[17px] text-[#959595] font-[500] leading-[100%]">
              NEGOTIATING
            </span>
          </div>
          <div className="border-[1px] border-solid border-[] flex justify-center items-center pl-[1rem]">
            <span className="lato-font text-[17px] text-[#959595] font-[500] leading-[100%]">
              COMPLETED
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card1;
