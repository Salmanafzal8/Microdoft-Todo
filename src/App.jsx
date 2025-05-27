// src/App.jsx
import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './Pages/Homepage';           
import MyDay from './Pages/MyDay';                       
import Tasks from './Pages/Tasks';  

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
