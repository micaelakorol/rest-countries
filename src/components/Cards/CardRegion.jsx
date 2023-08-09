import React, { useContext } from "react";
import { Context } from "../../context/Context";
import "../../styles/card.css";
import { v4 as uuidv4 } from "uuid";
import CardBody from "./UI-CardRegion/CardBody";
import InfoCard from "./UI-CardRegion/InfoCard";
// Tarjetas filtradas por región
const CardRegion = () => {
  const { regionCountries, searchParams } = useContext(Context);
  return (
    <main className="container-card">
      {regionCountries
        .filter((items) => {
          let filter = searchParams.get("filter");
          if (!filter) {
            return true;
          }
          let name = items.name.toLowerCase();
          return name.startsWith(filter.toLowerCase());
        })
        .map((item) => (
          <div className="card-countries" key={uuidv4()}>
            <section className="card-body">
              <CardBody item={item} />
              <InfoCard item={item} />
            </section>
          </div>
        ))}
    </main>
  );
};

export default CardRegion;
