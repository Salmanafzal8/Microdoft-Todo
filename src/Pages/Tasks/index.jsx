import React from "react";
import { MdAddCard } from "react-icons/md";
import { GrHomeRounded } from "react-icons/gr"; 
import { PiDotsThreeBold } from "react-icons/pi";
 import { BiExpand } from "react-icons/bi";
 import InputTodo from "../../Components/InputTodo";
import capture from '../../assets/Capture.PNG'; 

function Tasks() {
  return (
    <div className=" w-[80%] bg-[#1c1c1c] text-[#788cde] p-12 flex flex-col justify-between">
      <div className="flex  justify-between w-[100%] ">
        <div className="flex justify-center items-center gap-4">
        <GrHomeRounded className="text-[25px]" />
        <h1 className="text-3xl font-semibold"> Tasks</h1>
        </div>
      
      <div className="text-white flex gap-5">
       
<BiExpand className="font-bold" />
<PiDotsThreeBold className="font-bold" />
      </div>
      </div>

      <div className="flex flex-col items-center pt-12">
        <img src={capture} height='150' width='150' alt="" />
        <p className="text-xs text-center">Task Show up here if they are not part <br /> of any list tou have created</p>
      </div>
<InputTodo className="placeholder-[#788cde]" />

    </div>
  );
}

export default Tasks;
