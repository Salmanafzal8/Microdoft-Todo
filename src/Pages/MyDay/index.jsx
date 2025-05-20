import React from "react";
import { TbWindowMaximize } from "react-icons/tb";
import { SlBulb } from "react-icons/sl";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { SlCalender } from "react-icons/sl";
import InputTodo from "../../Components/InputTodo";


const Myday = () => {
  return (
    <div className="bg-[#1c1c1c] w-[82%] pt-8 px-8 ">
      <div className="flex flex-row  align-center justify-between px-3">
        <div className="flex flex-col  ">
          <h1 className=" font-semibold text-[#d16460] text-[25px] ">My Day </h1>
          <p className="text-[#d16460]">Tuesday, May 20</p>
        </div>
        <div className="flex text-white flex-row gap-8 pt-[30px] ">
          <TbWindowMaximize className="text-[18px]"/>
          <SlBulb className="text-[18px]" />
          <HiOutlineDotsHorizontal className="text-[18px]" />
        </div>
      </div>
      <div className=" flex  text-[#d16460]  items-center flex-col p-[10pxr] gap-3 mt-[120px]  ">
        <SlCalender  className="text-[100px] items-center"/>
        <div className="flex justify-center items-center flex-col">
        <h3 className="text-[18px] font-semibold"> Focus on your Day</h3>
        <br />
        <p className="text-center text-[12px] mt-[-12px]">
          Get things done with my My Day,a list
          <br />
          that refreshes every day
        </p>
        </div>
        
      </div>
      <InputTodo/>
    </div>
  );
};

export default Myday;
