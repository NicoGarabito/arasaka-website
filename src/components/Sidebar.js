import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import '../styles.css';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul>
      <li>
          <Link to="/" className="neon-effect">
            <i className="pi pi-home"></i> Home
          </Link>
        </li>
        <li>
          <Link to="/services" className="neon-effect">
            <i className="pi pi-cog"></i> Services
          </Link>
        </li>
        <li>
          <Link to="/contact" className="neon-effect">
            <i className="pi pi-envelope"></i> Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
