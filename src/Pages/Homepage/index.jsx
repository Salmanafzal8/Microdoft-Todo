// src/Pages/Homepage/index.jsx
import React from 'react';
import Sidebar from '../../Layout/Sidebar';
import Tasks from '../Tasks'; // This points to index.jsx in /Tasks

const Home = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <Tasks />
    </div>
  );
};

export default Home;
