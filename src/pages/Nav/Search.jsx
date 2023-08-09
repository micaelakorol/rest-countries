import React, { useContext } from "react";
import { Context } from "../../context/Context";
import "../../styles/nav.css";

const Search = () => {
  const { handleChange, searchParams } = useContext(Context);

  return (
    <section className="section-input">
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchParams.get("filter") || ""}
        onChange={handleChange}
        tabIndex="0"
      />
    </section>
  );
};

export default Search;
