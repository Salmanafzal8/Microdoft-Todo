import React from "react";
import { MdStarBorder } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";

function DisplayTable({
  Data,
  completedData,
  Completed,
  Deletion,
  completeDeletion,
  Incompleted,
}) {
  return (
    <div>
      <table className="w-full border-separate border-spacing-y-2" border="1">
        <tbody>
          {Data.map((user, index) => (
            <tr
              key={index}
              className="h-[60px] bg-[#292929] hover:bg-[#343435]  text-white"
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
                    <div className=" w-6 ml-1 " >
                    {user}
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

      {completedData.length > 0 && (
        <>
          <h2 className="text-white ml-1 mt-4 mb-2 text-center mr-[750px] rounded-[5px] flex items-center gap-1  bg-[#343435] ">
            {" "}
            <IoIosArrowDown className=" ml-1 " />
            Completed Tasks
          </h2>
          <table
            className="w-full border-separate border-spacing-y-2"
            border="1"
          >
            <tbody>
              {completedData.map((task, index) => (
                <tr
                  key={index}
                  className="h-[60px] bg-[#292929] hover:bg-[#343435] text-white"
                >
                  <td className="px-4 py-2">
                    <div className="flex justify-between">
                      <div className="flex gap-2.5">
                        <button
                          onClick={() => Incompleted(index)}
                          className="w-5 h-5 rounded-full bg-[#292929] hover:bg-[#343435] border border-white relative group"
                        >
                          <span className="absolute inset-0 flex items-center justify-center text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">
                            ✓
                          </span>
                        </button>
                        <div className="w-5 h-5" />
                        {task}
                      </div>
                      <button onClick={() => completeDeletion(index)}>
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
