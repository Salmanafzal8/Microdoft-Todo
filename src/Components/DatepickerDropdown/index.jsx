import React, {  useEffect, useState } from "react";
import { IoTodayOutline } from "react-icons/io5";
import { HiCalendarDateRange } from "react-icons/hi2";
import { LiaCalendarWeekSolid } from "react-icons/lia";
import { BsCalendarWeek } from "react-icons/bs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateDropdown = ({
  setLabel,
  selectedDate,
  setSelectedDate,
  setShowDropdown,
  dropdownRef,
  inputRef,
}) => {
  const [showCalendar, setShowCalendar] = useState(false);

  const formatDate = (date) => {
    if (!date) return "";
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
        setShowCalendar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef, setShowDropdown]);

  return (
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
            setTimeout(() => inputRef.current?.focus(), 0);
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
            setTimeout(() => inputRef.current?.focus(), 0);
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
            setTimeout(() => inputRef.current?.focus(), 0);
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
            setTimeout(() => inputRef.current?.focus(), 0);
          }}
        >
          <BsCalendarWeek className="opacity-75 text size-[20px]" />
          Pick A date
        </li>
        {showCalendar && (
          <div className="p-2">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => {
                setSelectedDate(date);
                setLabel(formatDate(date));
                setShowCalendar(false);
                setShowDropdown(false);
              }}
              inline
            />
          </div>
        )}
      </ul>
    </div>
  );
};

export default DateDropdown;
