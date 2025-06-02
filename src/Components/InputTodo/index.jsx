import React, { useState, useRef, useEffect } from "react";
import { FaPlus, FaRegCircle } from "react-icons/fa6";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { IoTodayOutline } from "react-icons/io5";
import { HiCalendarDateRange } from "react-icons/hi2";
import { LiaCalendarWeekSolid } from "react-icons/lia";
import { BsCalendarWeek } from "react-icons/bs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt } from "react-icons/fa";

const InputTodo = ({ inputText, handleInputChange, add, Label, setLabel }) => {
  const inputRef = useRef(null); // for wrapper div
  const inputElementRef = useRef(null); // for actual input field

  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
        setShowCalendar(false);
      }
    };
    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  const formatDate = (date) => {
    if (!date) return "";
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };
  return (
    <div
      ref={inputRef}
      className="bg-[#292929] hover:bg-[#343435] flex flex-row rounded mt-[10px] relative items-center"
    >
      <button className="hover:bg-[#343435]">
        {isInputFocused ? (
          <FaRegCircle className="text-[#788cde] text-2xl mx-[12px]" />
        ) : (
          <FaPlus className="text-[#788cde] mx-[10px]" />
        )}
      </button>

      <input
        ref={inputElementRef}
        onFocus={() => setIsInputFocused(true)}
        onBlur={() => setIsInputFocused(false)}
        onChange={handleInputChange}
        name="inputText"
        id="inputText"
        value={inputText}
        className="py-[14px] outline-none placeholder-[] text-white rounded w-full"
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
      {!Label && inputText.trim() !== "" && (
        <button onClick={() => setShowDropdown((prev) => !prev)}>
          <MdOutlineCalendarMonth className="text-[#ffffff] text-2xl mx-[10px] my-[10px] z-50" />
        </button>
      )}

      {Label && (
        <button
          onClick={() => {
            setShowDropdown(true);
          }}
          className="text-sm text-white flex items-center gap-1 py-1 px-3 text-[16px] mx-2 whitespace-nowrap "
        >
          <FaRegCalendarAlt />
          {Label}
        </button>
      )}

      {showDropdown && (
        <div
          ref={dropdownRef}
          className="absolute bottom-[50px] right-[-30px] z-50 bg-[#212121] border text-[#bbbaba] rounded min-w-[230px] flex flex-col text-sm overflow-hidden"
        >
          <ul className="w-full">
            <li
              className="hover:bg-[#3d3d3d] text-[15px] py-3 px-4 flex items-center gap-4 cursor-pointer"
              onClick={() => {
                setLabel("Today");
                setSelectedDate(null);
                setShowDropdown(false);
                setShowCalendar(false);
                setTimeout(() => inputElementRef.current?.focus(), 0);
              }}
            >
              <IoTodayOutline className="opacity-75 size-[20px]" />
              Today
            </li>
            <li
              className="hover:bg-[#3d3d3d] text-[15px] py-3 px-4 flex items-center gap-4 cursor-pointer"
              onClick={() => {
                setLabel("Tomorrow");
                setSelectedDate(null);
                setShowDropdown(false);
                setShowCalendar(false);
                setTimeout(() => inputElementRef.current?.focus(), 0);
              }}
            >
              <HiCalendarDateRange className="opacity-75 size-[20px]" />
              Tomorrow
            </li>
            <li
              className="hover:bg-[#3d3d3d] text-[15px] py-3 px-4 border-b flex items-center gap-4 cursor-pointer"
              onClick={() => {
                setLabel("Next Week");
                setSelectedDate(null);
                setShowDropdown(false);
                setShowCalendar(false);
                setTimeout(() => inputElementRef.current?.focus(), 0);
              }}
            >
              <LiaCalendarWeekSolid className="opacity-75 size-[20px]" />
              Next Week
            </li>
            <li
              className="hover:bg-[#3d3d3d] text-[15px] py-3 px-4 flex items-center gap-4 cursor-pointer"
              onClick={() => {
                setShowCalendar(true);
                setSelectedDate(null);
              }}
            >
              <BsCalendarWeek className="opacity-75 size-[20px]" />
              Pick A date
            </li>
          </ul>
          {showCalendar && (
            <div className="p-2">
              <DatePicker
                selected={selectedDate}
                onChange={(date) => {
                  setSelectedDate(date);
                  setLabel(formatDate(date));
                  setShowCalendar(false);
                  setShowDropdown(false);
                  setTimeout(() => inputElementRef.current?.focus(), 0);
                }}
                inline
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default InputTodo;
