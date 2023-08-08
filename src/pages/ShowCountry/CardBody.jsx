import React from "react";
import '../../styles/infoCard.css'
const CardBody = ({ data }) => {
  return (
    <section className="body-card">
      <h2>{data.name}</h2>
      <p>Native Name: {data.nativeName}</p>
      <p>Population: {data.population}</p>
      <p>Region: {data.region}</p>
      <p>Sub Region: {data.subregion} </p>
      <p>
        Capital:
        {data.capital ? data.capital : "-"}
      </p>
    </section>
  );
};

export default CardBody;
