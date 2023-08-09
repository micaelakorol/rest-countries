import React from "react";
import "../../styles/nav.css";
import "../../styles/global.css";
import CardCountries from "../../components/Cards/CardCountries";
import Search from "./Search";
import Filter from "./Filter";
const Nav = () => {

  return (
    <>
      <nav className="container-nav">
       <Search />
       <Filter />
      </nav>
      <CardCountries />
    </>
  );
};

export default Nav;
