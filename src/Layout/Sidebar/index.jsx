
import React, { useState } from 'react';
import { IoIosArrowDropdown } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { LiaSearchSolid } from "react-icons/lia";
import { FiSun } from "react-icons/fi";
import { MdStarOutline } from "react-icons/md";
import { MdInsertChartOutlined } from "react-icons/md"; 
import { GrHomeRounded } from "react-icons/gr";
import { BsPlusLg } from "react-icons/bs";
import { MdAddCard } from "react-icons/md";
const Sidebar = () => {
   const [showDropdown, setShowDropdown] = useState(false);
  return (

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

    {/* Sidebar Navigation */}
    <ul className="text-white flex flex-col items-start w-full">
  <li className="w-full">
    <button className="h-10 w-full flex justify-start items-center gap-4 text-[14px] hover:bg-gray-600 transition duration-150 rounded px-4">
      <FiSun className="text-[17px] text-[#e46b67]" /> My Day
    </button>
  </li>
  <li className="w-full">
    <button className="h-10 w-full flex justify-start items-center gap-4 text-[14px] hover:bg-gray-600 transition duration-150 rounded px-4">
      <MdStarOutline className="text-[20px] text-[
#d39ea8]" /> Important
    </button>
  </li>
  <li className="w-full">
    <button className="h-10 w-full flex justify-start items-center gap-4 text-[14px] hover:bg-gray-600 transition duration-150 rounded px-4">
      <MdInsertChartOutlined className="text-[20px]" /> Planned
    </button>
  </li>
  <li className="w-full">
    <button className="h-10 w-full flex justify-start items-center gap-4 text-[14px] hover:bg-gray-600 transition duration-150 rounded px-4">
      <CiUser className="text-[20px] text-[#6a8b7d]" /> Assigned to me
    </button>
  </li>
  <li className="w-full">
    <button className="h-10 w-full flex justify-start items-center gap-4 text-[14px] hover:bg-gray-600 transition duration-150 rounded px-4">
      <GrHomeRounded className="text-[15px] text-[#5a6592]" /> Task
    </button>
  </li>
</ul>

  </div>

  {/* Bottom Buttons */}
  <div className="flex gap-2 w-full">
    <button className="h-10 w-[80%] flex justify-start items-center gap-2 text-[14px] hover:bg-gray-600 transition duration-150 rounded px-2">
      <BsPlusLg className="text-[20px]" /> New List
    </button>

    <button className="h-10 w-[20%] flex justify-center items-center gap-2 text-[14px] hover:bg-gray-600 transition duration-150 rounded">
      <MdAddCard className="text-[25px]" />
    </button>
  </div>
</div>

  )
}

export default Sidebar
