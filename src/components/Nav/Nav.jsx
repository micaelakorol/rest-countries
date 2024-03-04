import React from "react";
import "../../styles/nav.css";
import "../../styles/global.css";
import RenderCardCountries from "../Cards/RenderCardCountries";
import InputSearch from "./elements/InputSearch";
import SelectFilter from "./elements/SelectFilter";
const Nav = () => {
  return (
    <>
      <nav className="container-nav">
        <InputSearch />
        <SelectFilter />
      </nav>
      <RenderCardCountries />
    </>
  );
};

export default Nav;
