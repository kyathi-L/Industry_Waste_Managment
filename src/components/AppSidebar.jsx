import React from "react";
import { NavLink } from "react-router-dom";
import "./../styles/App.css"; // Ensure the correct path to the CSS file

const AppSidebar = () => {
  return (
    <aside className="sidebar" aria-label="Sidebar Navigation">
      <h2 className="sidebar-title">Menu</h2>
      <nav>
        <ul className="sidebar-list">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
              aria-label="Go to Home Page"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/list-materials"
              className={({ isActive }) => (isActive ? "active" : "")}
              aria-label="View List of Materials"
            >
              List Materials
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/search"
              className={({ isActive }) => (isActive ? "active" : "")}
              aria-label="Search for Materials"
            >
              Search Materials
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/materials"
              className={({ isActive }) => (isActive ? "active" : "")}
              aria-label="Manage Materials"
            >
              Material Manager
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default AppSidebar;
