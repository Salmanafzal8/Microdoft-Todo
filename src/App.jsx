
// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Tasks from "./Pages/Tasks";
import MyDay from "./Pages/MYDay";
import MainLayout from "./Pages/Homepage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="myday" element={<MyDay />} />
        {/* <Route path="important" element={<Important />} /> */}
        {/* <Route path="planned" element={<Planned />} /> */}
        {/* <Route path="assigned" element={<Assigned />} /> */}
        {/* <Route path="tasks" element={<Tasks />} /> */}
        <Route path="*" element={<Tasks />} />
      </Route>
    </Routes>
  );
}

export default App;

