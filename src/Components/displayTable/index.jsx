import React from "react";
import { MdStarBorder } from "react-icons/md";

function DisplayTable({ displayingData }) {
  return (
    <div>
      <table className="w-full border-separate border-spacing-y-2" border="1">
        <tbody>
          {displayingData.map((user, index) => (
            <tr
              key={index}
              className="h-[60px] bg-[#292929] hover:bg-[#343435] text-white"
            >
              <td className="px-4 py-2">
                <div className="flex justify-between">
                  <div className="flex gap-2.5">
                      <button
                        className="w-5 h-5 rounded-full bg-[#292929] hover:bg-[#343435] border border-white relative group"
                      >
                        <span className="absolute inset-0 flex items-center justify-center text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">
                          ✓
                        </span>
                      </button>
                      <div className="w-5 h-5" />
                    {user}
                  </div>
                  <button>
                    <MdStarBorder className="text-2xl hover:text-[#788cde]" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayTable;
