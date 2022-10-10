import React, { useContext } from "react";
import "../../styles/nav.css";
import "../../styles/global.css";
import search from "../../icons/search.svg";
import { Context } from "../../context/Context";
import CardCountries from "../Cards/CardCountries";

const Nav = () => {
  const {
    setMostrarCard,
    setRegionCountries,
    value,
    captureOption,
    handleChange,
    searchParams,
  } = useContext(Context);
  const regionFilter = async (value) => {
    if (value.length > 0 || value !== "") {
      setMostrarCard(false);
      const url = `https://restcountries.com/v2/region/${value}`;
      try {
        const res = await fetch(url);
        const data = await res.json();
        setRegionCountries(data);
      } catch (error) {
        return error;
      }
    } else {
      setMostrarCard(true);
    }
  };
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
          <select
            name="select"
            value={value}
            onChange={captureOption}
            onClick={() => regionFilter(value)}
          >
            <option value="" defaultValue={value} disabled>
              Filter by region
            </option>
            <option value="">All Countries</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </nav>
      <CardCountries />
    </>
  );
};

export default Nav;
