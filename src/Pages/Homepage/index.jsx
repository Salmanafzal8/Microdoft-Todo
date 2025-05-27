
// Pages/Homepage/index.jsx
import React from "react";
import Sidebar from "../../Layout/Sidebar";
import { Outlet } from "react-router-dom";


const MainLayout = () => {
  return (

    <div className="flex w-full h-screen">
      {/* Sidebar - 20% */}
      <div className="w-[20%]">
        <Sidebar />
      </div>

      {/* Page content - 80% */}
      <div className="w-[80%] overflow-hidden">
        <Outlet />
      </div>
      </div>
  );
}

export default MainLayout;

