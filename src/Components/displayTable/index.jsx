import React from "react";
import { MdStarBorder } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegCalendarAlt } from "react-icons/fa";

function DisplayTable({
  Data,
  CompletedData,
  Completed,
  Deletion,
  CompleteDeletion,
  Incompleted ,
}) {

  
  return (
    <div>
      <table
        className="w-full scroll-auto border-separate border-spacing-y-2"
        border="1"
      >
        <tbody>
          {Data.map((user, index) => (
            <tr
              key={index}
              className="h-[60px] bg-[#292929] hover:bg-[#343435] text-white"
            >
              <td className="px-4 py-2">
                <div className="flex justify-between">
                  <div className="flex gap-2.5">
                    <button
                      onClick={() => Completed(index)}
                      className="w-5 h-5 rounded-full bg-[#292929] hover:bg-[#343435] border border-white relative group"
                    >
                      <span className="absolute inset-0 flex items-center justify-center text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">
                        ✓
                      </span>
                    </button>
                    <div className="ml-1">
                      <p className="text-white">{user.text}</p>
                      {user.dateLabel &&  (
                        <p className="  flex items-center text-white gap-1 text-[11px] font-semibold mt-1 ml-1">
                          <FaRegCalendarAlt />
                          {user.dateLabel}
                        </p>
                      )}
                    </div>
                  </div>
                  <button onClick={() => Deletion(index)}>
                    <RiDeleteBin6Line className="text-2xl hover:text-[#788cde]" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {CompletedData.length > 0 && (
        <>
          <h2 className="text-white ml-1 mt-4 mb-2 text-center mr-[750px] rounded-[5px] flex items-center gap-1 bg-[#343435]">
            <IoIosArrowDown className="ml-1" />
            Completed Tasks
          </h2>
          <table
            className="w-full border-separate border-spacing-y-2"
            border="1"
          >
            <tbody>
              {CompletedData.map((task, index) => (
                <tr
                  key={index}
                  className="h-[60px] bg-[#292929] hover:bg-[#343435] text-white"
                >
                  <td className="px-4 py-2">
                    <div className="flex justify-between">
                      <div className="flex gap-2.5">
                        <button
                          onClick={() => Incompleted(index)}
                          className="w-5 h-5 rounded-full bg-indigo-400 hover:bg-[#343435] border border-indigo-400 relative group"
                        >
                          <span className="absolute inset-0 flex items-center justify-center text-[10px] text-black transition-opacity">
                            ✓
                          </span>
                        </button>
                        <div className="ml-1">
                          <p className="text-white opacity-50 line-through">{task.text}</p>
                          {task.dateLabel && (
                            <p className="text-white flex items-center gap-1 opacity-50 text-[11px] font-semibold mt-1 ml-1">
                              <FaRegCalendarAlt />
                              {task.dateLabel}
                            </p>
                          )}
                        </div>
                      </div>
                      <button onClick={() => CompleteDeletion(index)}>
                        <RiDeleteBin6Line className="text-2xl hover:text-[#788cde]" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default DisplayTable;
