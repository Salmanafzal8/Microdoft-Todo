import React from "react";
import { FaPlus } from "react-icons/fa6";

const InputTodo = () => {
  return (
    <div className="bg-[#292929] hover:bg-[#343435]  flex flex-row rounded mt-[80px]">
      <button>
        <FaPlus className="text-[#d16460] font-[100px] mx-[10px]" />
      </button>
      <input
        className=" p-[15px]  hover:bg-[#343435] outline-none text-[#d16460] rounded bg-[#292929]  w-full"
        placeholder="Add a task"
        type="add a task "
      />
    </div>
  );
};

export default InputTodo;
