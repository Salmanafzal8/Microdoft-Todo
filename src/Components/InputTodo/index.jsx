import React, { useState, useEffect, useRef } from "react";
import { FaPlus, FaRegCircle } from "react-icons/fa6";
import { MdOutlineCalendarMonth, MdManageAccounts } from "react-icons/md";
import { IoSettingsOutline, IoSyncSharp } from "react-icons/io5";
import { MdOutlineToday } from "react-icons/md";
import { CgCalendarNext } from "react-icons/cg";
import { LuCalendarClock } from "react-icons/lu";
import { IoCalendarOutline } from "react-icons/io5";
const InputTodo = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    const disabledropdown = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    if (showDropdown) {
      document.addEventListener("mousedown", disabledropdown);
    }
    return () => {
      document.removeEventListener("mousedown", disabledropdown);
    };
  }, [showDropdown]);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [inputText, setinputText] = useState("");
  const handleInputChange = (e) => {
    setinputText(e.target.value);
  };
  return (
    <div className="bg-[#292929] hover:bg-[#343435] py-1 flex flex-row rounded mt-[80px]">
      <button className="hover:bg-[#343435]">
        {isInputFocused ? (
          <FaRegCircle className="text-[#788cde] text-2xl mx-[12px]" />
        ) : (
          <FaPlus className="text-[#788cde] mx-[10px]" />
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
      />
      {inputText !== "" && (
        <div className="relative">
          <MdOutlineCalendarMonth
            onClick={() => setShowDropdown(!showDropdown)}
            className="text-[#ffffff] text-2xl mx-[10px] my-[10px] z-50 cursor-pointer"
          />
          {showDropdown && (
            <div
              ref={dropdownRef}
              className="absolute bottom-[40px] right-[-25px] z-50 bg-[#212121] border text-[#bbbaba] rounded min-w-[230px] "
            >
              <ul className="w-full">
                <li className="hover:bg-[#3d3d3d] text-[15px] py-3 px-4  flex items-center gap-4 cursor-pointer">
                  <MdOutlineToday className="opacity-75 text-[20px]" />
                  Today
                </li>
                <li className="hover:bg-[#3d3d3d] text-[15px] py-3 px-4  flex items-center gap-4 cursor-pointer">
                  <CgCalendarNext className="opacity-75 text-[20px]" />
                  Tomorrow
                </li>
                <li className="hover:bg-[#3d3d3d] text-[15px] py-3 px-4 border-b flex items-center gap-4 cursor-pointer">
                  <LuCalendarClock className="opacity-75 text-[20px]" />
                  Next week
                </li>
                <li className="hover:bg-[#3d3d3d] text-[15px] py-3 px-4  flex items-center gap-4 cursor-pointer">
                  <IoCalendarOutline className="opacity-75 text-[20px]" />
                  Pick a date
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default InputTodo;
