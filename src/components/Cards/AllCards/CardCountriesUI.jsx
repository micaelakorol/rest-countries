import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import { Context } from "../../../context/Context";
import CardBodyCountries from "./CardElements/CardBodyCountries";
import InfoCardCountries from "./CardElements/InfoCardCountries";
import FilterCountries from "../../../services/functions/filterCountries";

const CardCountriesUI = ({ data }) => {
  const { mostrarCard } = useContext(Context);
  const {filterCountries} = FilterCountries()
  return (
    <main>
      {mostrarCard && (
        <div className="container-card">
          {data
            .filter(filterCountries)
            .map((item) => (
              <div className="card-countries" key={uuidv4()}>
                <section className="card-body">
                 <CardBodyCountries item={item}/>
                 <InfoCardCountries item={item}/>
                </section>
              </div>
            ))}
        </div>
      )}
    </main>
  );
};

export default CardCountriesUI;
