import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <Link to="/" className="navLink">
        Home
      </Link>
      <Link to="/phones">Phone List</Link>
    </div>
  );
};

export default Navbar;
