import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to='/' >Home</Link>
      <Link to='/new' >Añadir</Link>
      <Link to='/search' >Buscar</Link>
    </nav>
  );
};

export default NavBar;
