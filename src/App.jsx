// src/App.jsx
import './App.css';
import Home from './Pages/Homepage'; // Folder with index.jsx

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
