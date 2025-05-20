import React from "react";
import { FaPlus } from "react-icons/fa6";

const InputTodo = () => {
  return (
    <div className="bg-[#292929] hover:bg-[#343435] p-1 flex flex-row rounded mt-[80px]">
      <button>
        <FaPlus className="text-[#788cde] font-[100px] mx-[10px]" />
      </button>
      <input
        className=" py-[10px]  hover:bg-[#343435] outline-none text-[#788cde] rounded bg-[#292929]  w-full"
        placeholder="Add a task"
        type="add a task "
      />
    </div>
  );
};

export default InputTodo;
