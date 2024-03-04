import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import { Context } from "../../../context/Context";
import CardBodyCountries from "./CardElements/CardBodyCountries";
import InfoCardCountries from "./CardElements/InfoCardCountries";
import FilterCountries from "../functions/FilterCountries";

{/** show all card */}
const ShowCardCountries = ({ data }) => {
  const { mostrarCard, message } = useContext(Context);
  const { filterCountries } = FilterCountries();
  return (
    <main>
      <h1>{message}</h1>
      {mostrarCard && (
        <div className="container-card">
          {data.filter(filterCountries).map((item) => (
            <div className="card-countries" key={uuidv4()}>
              <section className="card-body">
                <CardBodyCountries item={item} />
                <InfoCardCountries item={item} />
              </section>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default ShowCardCountries;
