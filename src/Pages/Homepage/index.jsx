<<<<<<< HEAD
import React from 'react'
import Sidebar from '../../Layout/Sidebar'
=======
// Pages/Homepage/index.jsx
import React from "react";
import Sidebar from "../../Layout/Sidebar";
import { Outlet } from "react-router-dom";
>>>>>>> fe95e34 (table work)

const MainLayout = () => {
  return (
<<<<<<< HEAD
    <div>
      <Sidebar/>
=======
    <div className="flex w-full h-screen">
      {/* Sidebar - 20% */}
      <div className="w-[20%]">
        <Sidebar />
      </div>

      {/* Page content - 80% */}
      <div className="w-[80%] overflow-hidden">
        <Outlet />
      </div>
>>>>>>> fe95e34 (table work)
    </div>
  )
}

<<<<<<< HEAD
export default Home
=======
export default MainLayout;
>>>>>>> fe95e34 (table work)
