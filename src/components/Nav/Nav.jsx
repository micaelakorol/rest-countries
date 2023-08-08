import React from "react";
import "../../styles/nav.css";
import "../../styles/global.css";
import CardCountries from "../Cards/Render/CardCountries";
import InputSearch from "./InputSearch";
import SelectFilter from "./SelectFilter";
const Nav = () => {
  return (
    <>
      <nav className="container-nav">
        <InputSearch />
        <SelectFilter />
      </nav>
      <CardCountries />
    </>
  );
};

export default Nav;
