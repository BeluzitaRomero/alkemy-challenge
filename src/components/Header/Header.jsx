import React from "react";
// import { Link } from "react-router-dom";
import { Nav } from "../Nav/Nav";
// import { Search } from "../Search";

import "./Header.css";
// import { Link } from "react-router-dom";
// import SearchAppBar, { Search } from "../Search/Search";

export const Header = () => {
  return (
    // <header>
    //   <nav>
    //     <ul>
    //       <li>
    //         <Link to={"/"}>Login</Link>
    //       </li>
    //       <li>
    //         <Link to={"/listado"}>Listado</Link>
    //       </li>
    //       <li>
    //         <Link to={"/contacto"}>Contacto</Link>
    //       </li>
    //     </ul>
    //     <Search />
    //   </nav>
    // </header>
    <Nav />
  );
};
