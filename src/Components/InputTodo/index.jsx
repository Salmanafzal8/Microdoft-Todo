import React, { useState, useRef, useEffect } from "react";
import { FaPlus, FaRegCircle } from "react-icons/fa6";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { IoTodayOutline } from "react-icons/io5";
import { HiCalendarDateRange } from "react-icons/hi2";
import { LiaCalendarWeekSolid } from "react-icons/lia";
import { BsCalendarWeek } from "react-icons/bs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const InputTodo = ({ inputText, handleInputChange, add }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const disabledropdown = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
        setShowCalendar(false); // dropdown close ho tou calendar bhi close
      }
    };
    if (showDropdown) {
      document.addEventListener("mousedown", disabledropdown);
    }
    return () => {
      document.removeEventListener("mousedown", disabledropdown);
    };
  }, [showDropdown]);

  return (
    <div className="bg-[#292929] hover:bg-[#343435] py-1 flex flex-row rounded mt-[80px] relative">
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
        onKeyDown={(e) => {
          if (e.key === "Enter") add();
        }}
      />

      {inputText !== "" && (
        <div className="relative">
          <button onClick={() => setShowDropdown((prev) => !prev)}>
            <MdOutlineCalendarMonth className="text-[#ffffff] text-2xl mx-[10px] my-[10px] z-50" />
          </button>

          {showDropdown && (
            <div
              ref={dropdownRef}
              className="absolute bottom-[50px] right-[-30px] z-50 bg-[#212121] border text-[#bbbaba] rounded min-w-[230px] flex flex-col text-sm overflow-hidden transition-all duration-300 ease-in-out transform origin-top"
            >
              <ul className="w-full">
                <li
                  className="hover:bg-[#3d3d3d] text-[15px] py-3 px-4 flex items-center gap-4 cursor-pointer"
                  onClick={() => {
                    setSelectedDate(new Date());
                    setShowCalendar(true);
                  }}
                >
                  <IoTodayOutline className="opacity-75 size-[20px]" />
                  Today
                </li>
                <li
                  className="hover:bg-[#3d3d3d] text-[15px] py-3 px-4 flex items-center gap-4 cursor-pointer"
                  onClick={() => {
                    const tomorrow = new Date();
                    tomorrow.setDate(tomorrow.getDate() + 1);
                    setSelectedDate(tomorrow);
                    setShowCalendar(true);
                  }}
                >
                  <HiCalendarDateRange className="opacity-75 size-[20px]" />
                  Tomorrow
                </li>
                <li
                  className="hover:bg-[#3d3d3d] text-[15px] py-3 px-4 border-b flex items-center gap-4 cursor-pointer"
                  onClick={() => {
                    const nextMonth = new Date();
                    nextMonth.setMonth(nextMonth.getMonth() + 1);
                    setSelectedDate(nextMonth);
                    setShowCalendar(true);
                  }}
                >
                  <LiaCalendarWeekSolid className="opacity-75 size-[20px]" />
                  Next Month
                </li>
                <li
                  className="hover:bg-[#3d3d3d] text-[15px] py-3 px-4 flex items-center gap-4 cursor-pointer"
                  onClick={() => {
                    setShowCalendar(true);
                  }}
                >
                  <BsCalendarWeek className="opacity-75 size-[20px]" />
                  Pick A date
                </li>
                {showCalendar && (
                  <div className="p-2">
                    <DatePicker className="bg"
                      selected={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      inline
                    />
                  </div>
                )}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default InputTodo;
