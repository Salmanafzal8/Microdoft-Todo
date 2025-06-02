// src/App.jsx
import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./Pages/Homepage";
import MyDay from "./Pages/MyDay";
import Tasks from "./Pages/Tasks";
import Error404 from "./Pages/404 Page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* <Route path="/myday" element={<MyDay />} />*/}
        {/* <Route path="important" element={<Important />} /> */}
        {/* <Route path="planned" element={<Planned />} /> */}
        {/* <Route path="assigned" element={<Assigned />} /> */}
        <Route path="/tasks" element={<Tasks />} />
      </Route>
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
