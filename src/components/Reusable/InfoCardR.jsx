import React from "react";
import "../../styles/card.css";

const InfoCardR = ({ population, region, capital, className }) => {
  return (
    <section className="info-card">
      <p>
        <b>Population:</b> {population}
      </p>
      <p>
        <b>Region:</b> {region}
      </p>
      <p>
        <b>Capital:</b> {capital}
      </p>
    </section>
  );
};

export default InfoCardR;
