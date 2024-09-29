import React from 'react';
import { Outlet } from 'react-router-dom';
import '../styles.css';
const Main = () => {
  return (
    <main className="main">
      <Outlet />
    </main>
  );
};

export default Main;
