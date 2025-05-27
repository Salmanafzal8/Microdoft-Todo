import React, { useState, useRef , useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { LiaSearchSolid } from "react-icons/lia";
import { FiSun } from "react-icons/fi";
import { MdStarOutline } from "react-icons/md";
import { MdInsertChartOutlined } from "react-icons/md";
import { GrHomeRounded } from "react-icons/gr";
import { BsPlusLg } from "react-icons/bs";
import { MdAddCard } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoSyncSharp } from "react-icons/io5";
const Sidebar = () => {

const [showDropdown, setShowDropdown] = useState(false);
const dropdownRef = useRef(null);

useEffect(() => {
  const disabledropdown = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
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

  return (

<<<<<<< HEAD
  <div className="w-[18%] h-[100vh] bg-[#212121] text-amber-50 flex flex-col justify-between items-start px-2 pt-3 pb-0">
  <div className="flex flex-col gap-2.5 w-full">
    <div className="flex gap-2 justify-start items-start">
      <div className="h-[45px] w-[45px] rounded-full bg-[#00aba9] text-center flex items-center justify-center">
        <h1 className="text-1xl">HA</h1>
      </div>
      <div>
        <p className="font-medium">hafeez afzal</p>
        <p className="text-xs flex items-center gap-1">
          abdulhafeezafzal0@gmail.com
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="px-1 py-0.5 rounded text-xs cursor-pointer"
          >
            <IoIosArrowDropdown />
          </button>
        </p>

        {showDropdown && (
          <div className="mt-2 bg-white text-black rounded shadow-md p-2 w-[160px] text-sm">
            <ul>
              <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">Profile</li>
              <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">Settings</li>
              <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">Logout</li>
            </ul>
=======
    <div className=" relative min-w-[20%] min-h-[100vh] bg-[#212121] text-amber-50 flex flex-col justify-between items-start px-2 pt-3 pb-0">
      <div className="flex flex-col gap-2.5 w-full">
        <div className="flex gap-2 justify-start items-start">
          <div className="h-[45px] w-[60px] rounded-full bg-[#00aba9] text-center flex items-center justify-center">
            <h1 className="text-1xl">HA</h1>
>>>>>>> fe95e34 (table work)
          </div>
          <div className="relative w-full">
            <p className="font-medium">hafeez afzal</p>
            <p className="text-xs flex items-center gap-1">
              abdulhafeezafzal0@gmail.com
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="px-1 py-0.5 text-[10px] -space-y-1 rounded text-xs cursor-pointer"
              >
                <IoIosArrowUp />
                <IoIosArrowDown />
              </button>
            </p>
            {showDropdown && (
              <div
              ref={dropdownRef}
                className={`absolute top-[50px] right-[10px] z-50 bg-[#212121] border text-[#bbbaba] rounded  min-w-[230px] flex flex-col text-sm overflow-hidden transition-all duration-300 ease-in-out transform origin-top ${
                  showDropdown
                    ? "scale-y-100 opacity-100 max-h-[500px]"
                    : "scale-y-0 opacity-0 max-h-0"
                }`}
              >
                <ul className="w-full">
                  <li className="hover:bg-[#3d3d3d]  text-[15px] py-3 px-4 border-b flex items-center gap-4 cursor-pointer">
                    <MdManageAccounts className="opacity-75" />
                    Manage Accounts
                  </li>
                  <li className="hover:bg-[#3d3d3d]  text-[15px] py-3 px-4 border-b flex items-center gap-4 cursor-pointer">
                    <IoSettingsOutline className="opacity-75" />
                    Settings
                  </li>
                  <li className="hover:bg-[#3d3d3d]  text-[15px] py-3 px-4 border-b  flex items-center gap-4 cursor-pointer">
                    <IoSyncSharp className="opacity-75" />
                    Sync
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex items-center w-[95%] h-[30px] border-[#313131] border-[0.5px] border-b-[#9a9a9a] rounded-[5px] px-2">
            <input
              type="text"
              placeholder="Search"
              className="flex-grow text-sm outline-none bg-transparent placeholder-white"
            />
            <LiaSearchSolid className="text-white text-base" />
          </div>
        </div>
       <ul className="text-white flex flex-col items-start w-full">
  <li className="w-full">
    <Link
      to="/myday"
      className="h-10 w-full flex justify-start items-center gap-4 text-[14px] hover:bg-gray-600 transition duration-150 rounded px-4"
    >
      <FiSun className="text-[17px] text-[#e46b67]" /> My Day
    </Link>
  </li>
  <li className="w-full">
    <Link
      to="/important"
      className="h-10 w-full flex justify-start items-center gap-4 text-[14px] hover:bg-gray-600 transition duration-150 rounded px-4"
    >
      <MdStarOutline className="text-[20px] text-[#d39ea8]" /> Important
    </Link>
  </li>
  <li className="w-full">
    <Link
      to="/planned"
      className="h-10 w-full flex justify-start items-center gap-4 text-[14px] hover:bg-gray-600 transition duration-150 rounded px-4"
    >
      <MdInsertChartOutlined className="text-[20px] text-[#8bd3ce]" /> Planned
    </Link>
  </li>
  <li className="w-full">
    <Link
      to="/assigned"
      className="h-10 w-full flex justify-start items-center gap-4 text-[14px] hover:bg-gray-600 transition duration-150 rounded px-4"
    >
      <CiUser className="text-[19px] text-[#6a8b7d]" /> Assigned to me
    </Link>
  </li>
  <li className="w-full">
    <Link
      to="/tasks"
      className="h-10 w-full flex justify-start items-center gap-4 text-[14px] hover:bg-gray-600 transition duration-150 rounded px-4"
    >
      <GrHomeRounded className="text-[15px] text-[#5a6592]" /> Task
    </Link>
  </li>
</ul>

      </div>
      <div className="flex gap-2 w-full">
        <button className="h-10 w-[80%] flex justify-start items-center gap-2 text-[14px] hover:bg-gray-600 transition duration-150 rounded px-2">
          <BsPlusLg className="text-[20px]" /> New List
        </button>
        <button className="h-10 w-[20%] flex justify-center items-center gap-2 text-[14px] hover:bg-gray-600 transition duration-150 rounded">
          <MdAddCard className="text-[25px]" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
