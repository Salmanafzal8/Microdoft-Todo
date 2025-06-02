import React, { useEffect, useState } from "react";
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
  const [tempDate, setTempDate] = useState(null); // for temporary date selection

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
      {!showCalendar ? (
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
            <IoTodayOutline className="opacity-75  size-[20px]" />
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
              setTempDate(selectedDate); // preserve previous selection
              setTimeout(() => inputRef.current?.focus(), 0);
            }}
          >
            <BsCalendarWeek className="opacity-75 text size-[20px]" />
            Pick A date
          </li>
        </ul>
      ) : (
        <div className="p-2 flex flex-col gap-2 items-center">
          <DatePicker
            selected={tempDate}
            onChange={(date) => setTempDate(date)}
            inline
          />
          <div className="flex justify-between w-full gap-2 mt-2">
            <button
              onClick={() => {
                setShowCalendar(false);
                setTempDate(null);
                setTimeout(() => inputRef.current?.focus(), 0);
              }}
              className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-1 rounded"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                if (tempDate) {
                  setSelectedDate(tempDate);
                  setLabel(formatDate(tempDate));
                }
                setShowCalendar(false);
                setShowDropdown(false);
                setTimeout(() => inputRef.current?.focus(), 0);
              }}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-1 rounded"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DateDropdown;
