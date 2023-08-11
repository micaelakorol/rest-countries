import React, { useContext, useEffect } from "react";
import { Context } from "../../../context/Context";
import "../../../styles/card.css";
import { v4 as uuidv4 } from "uuid";
import CardBody from "./CardElements/CardBody";
import InfoAboutCard from "./CardElements/InfoAboutCard";
import FilterCountries from "../../../services/functions/FilterCountries";
/* Show filtered countries*/
const ShowCardRegion = () => {
  const { regionCountries } = useContext(Context);
  const { filterCountries } = FilterCountries();
  return (
    <main className="container-card">
      {regionCountries.filter(filterCountries).map((item) => (
        <div className="card-countries" key={uuidv4()}>
          <section className="card-body">
            <CardBody item={item} />
            <InfoAboutCard item={item} />
          </section>
        </div>
      ))}
    </main>
  );
};

export default ShowCardRegion;
