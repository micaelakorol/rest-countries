import React, { useContext } from "react";
import "../styles/nav.css";
import "../styles/global.css";
import search from "../icons/search.svg";
import CardCountries from "../components/Cards/CardCountries";
import { Context } from "../context/Context";
import { RegionFilter } from "../services/requestNav";
import { select } from "../components/InitialValues/select";
const Nav = () => {
  const { value, captureOption, handleChange, searchParams } = useContext(Context);
  const { regionFilter } = RegionFilter();
  return (
    <>
      <nav className="container-nav">
        <div className="section-input">
          <button className="glass">
            {" "}
            <img src={search} alt="search-country" />
          </button>
          <input
            type="text"
            placeholder="Search for a country..."
            value={searchParams.get("filter") || ""}
            onChange={handleChange}
            tabIndex="0"
          />
        </div>
        <div className="select">
          <select name="select" value={value} onChange={captureOption}>
            <option value="" defaultValue={value} disabled>
              Filter by region
            </option>
            <option value="">All Countries</option>
            {select.map((item) => (
              <option key={item.id} onClick={() => regionFilter(value)}>
                {item.continent}
              </option>
            ))}
          </select>
        </div>
      </nav>
      <CardCountries />
    </>
  );
};

export default Nav;
