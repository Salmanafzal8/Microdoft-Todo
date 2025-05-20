
import React, { useState } from 'react';
const Sidebar = () => {
   const [showDropdown, setShowDropdown] = useState(false);
  return (

  <div className="w-[18%] h-[100vh] bg-red-600">
    <div className='flex justify-center gap-7 items-start'>
    <div className='h-[50px] w-[50px] rounded-full bg-amber-300 text-center flex items-center justify-center'><h1 className='text-2xl'> HA</h1></div>
    <div className='text-amber-100'><p>hafeez afzal</p> <p className="text-xs">abdulhafeezafzal0@gmail.com</p>

    <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="text-white bg-red-700 px-1 py-0.5 rounded text-xs cursor-pointer"
            >
              ⇵
            </button>
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
  </div>

  )
}

export default Sidebar
