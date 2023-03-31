import React from "react";
import Himg from "../../assets/icons/H.svg";
import Card3 from "./Card3";
import Card4 from "./Card4";

const Card2 = () => {
  return (
    <>
      <div className="w-[1114px] h-[526px] card-two flex flex-col justify-center  gap-[50px] p-[40px] ">
        <div className="flex  justify-start items-center gap-[40px]">
          <div className="flex flex-col gap-[10px]">
            <h1 className="lato-font  text-[30px] text-[#48AF78] font-[700] leading-[100%]">
              St Judes Hospital
            </h1>
            <span className="lato-font  text-[16px] text-[#959595] font-[500] leading-[100%]">
              Sarasota,FL. 33178
            </span>
          </div>
          <div className="flex justify-center items-center gap-[15px] hr-line px-[40px]  ">
            <div className="flex flex-col gap-[15px]">
              <h1 className="lato-font  text-[28px] text-[#48AF78] font-[700] leading-[100%]">
                10
              </h1>
              <span className="lato-font  text-[18px] text-[#959595] font-[500] leading-[100%]">
                October
              </span>
            </div>
            <div>
              <span className="lato-font  text-[28px] text-[#48AF78] font-[700] leading-[100%]">
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
        <div className="w-[712px] h-[48px] bg-[#44A16F] rounded-[24px] flex justify-start items-center pl-[20px]">
          <span className="text-[16px] text-[#FFFFFF] font-[500] leading-[100%]">
            COMPLETED
          </span>
        </div>
        <div className="grid grid-cols-3 justify-center items-center gap-[40px]">
          <Card4
            title="Holiday Inn"
            image={Himg}
            subtitle="1.5 miles away from joblocation. "
            para="Singles: $120"
            para1="Doubles: $145"
          />
          <Card3
            title="Holiday Inn"
            image={Himg}
            subtitle="1.5 miles away from joblocation. "
            para="Singles: $120"
            para1="Doubles: $145"
          />
          <Card3
            title="Holiday Inn"
            image={Himg}
            subtitle="1.5 miles away from joblocation. "
            para="Singles: $120"
            para1="Doubles: $145"
          />
        </div>
      </div>
    </>
  );
};

export default Card2;
