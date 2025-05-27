
import React, { useState } from "react";
import { FaPlus, FaRegCircle } from "react-icons/fa6";
import { MdOutlineCalendarMonth } from "react-icons/md";

const InputTodo = ({ inputText, handleInputChange, add }) => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  return (
    <div className="bg-[#292929] hover:bg-[#343435] py-1 flex flex-row rounded mt-[80px]">

      <button className="hover:bg-[#343435]">
        {isInputFocused ? (
          <FaRegCircle className="text-[#788cde] text-2xl mx-[12px]" />
        ) : (
          <FaPlus className="text-[#788cde] mx-[10px] " />
        )}

      </button>

      <input
        onFocus={() => setIsInputFocused(true)}
        onBlur={() => setIsInputFocused(false)}
        onChange={handleInputChange}
        name="inputText"
        id="inputText"
        value={inputText}
        className="py-[10px] hover:bg-[#343435] outline-none text-[#788cde] rounded bg-[#292929] w-full"
        placeholder={
          isInputFocused
            ? "Try typing utility 'Pay Utilites bill by Friday 6pm' "
            : "Add a task"
        }
        type="text"
        onKeyDown={(e) => {
          if (e.key === "Enter") add();
        }}
      />
      {inputText === "" ? (
        ""
      ) : (
        <MdOutlineCalendarMonth className="text-[#ffffff] text-2xl mx-[10px] my-[10px] z-50" />
      )}

    </div>
  );
};

export default InputTodo;
