import React from "react";
import Button from "../button/Button";

const Card3 = ({ image, title, subtitle, para, para1 }) => {
  return (
    <>
      <div className="w-[275px] h-[250px] card-three flex flex-col justify-between gap-[20px]">
        <div className="flex flex-col justify-center items-center gap-[10px] p-[15px]">
          <img src={image} alt="h-img" />
          <h1 className="text-[20px] text-[#85C371] font-[400] italic leading-[100%]">
            {title}
          </h1>
        </div>
        <div className="w-[275px] h-[100px] card-three-mini flex flex-col justify-center items-center gap-[10px] px-[10px]">
          <p className="lato-font text-[18px] text-[#959595] font-[500] leading-[100%] ">
            {subtitle}
          </p>
          <div className="flex justify-center items-center gap-[15px]">
            <div className="flex  flex-col ">
              <span className="text-[15px] text-[#959595] font-[500] leading-[100%]">
                {para}
              </span>
              <span className="text-[15px] text-[#959595] font-[500] leading-[100%]">
                {para1}
              </span>
            </div>
            <Button
              title="Book now"
              className="w-[126px] h-[40px] text-[18px] text-white font-[500] leading-[100%] bg-[#44A16F] rounded-[10px] cursor-pointer ease-linear duration-300 hover:bg-[#D96A6B]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card3;
