/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from "react";
import { Context } from "../../context/Context";
import "../../styles/card.css";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import CardRegion from "./CardRegion";
import { useData } from "../../services/service";
import Spinners from "../Pures/Spinners";

const CardCountries = () => {
  const { mostrarCard, searchParams } = useContext(Context);

  const { data, loading, error } = useData("https://restcountries.com/v2/all");
  if (loading) {
    return <Spinners />;
  }
  if (error !== "") {
    return alert("Error");
  }
  return (
    <main>
      {mostrarCard && (
        <div className="container-card">
          {data
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
                  <Link to={`/countries/${item.name}`}>
                    {" "}
                    {/*ruta dinamica*/}
                    <img
                      src={item.flags.svg}
                      alt="images-countries"
                      className="img-countries"
                    />{" "}
                  </Link>
                  <p key={uuidv4()} className="title-card">
                    {item.name}
                  </p>
                  <section className="info-card" tabindex="0">
                    <p>
                      <b>Population:</b> {item.population}
                    </p>
                    <p>
                      <b>Region:</b> {item.region}
                    </p>
                    <p>
                      <b>Capital:</b> {item.capital}
                    </p>
                  </section>
                </section>
              </div>
            ))}
        </div>
      )}
      <CardRegion />
    </main>
  );
};

export default CardCountries;
