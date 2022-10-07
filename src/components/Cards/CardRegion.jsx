import React, { useContext } from "react";
import { Context } from "../../context/Context";
import "../../styles/card.css";
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";

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
            <Link to={`/countries/${item.name}`}>
                    {" "}
                    {/*route dinamic*/}
                    <img
                      src={item.flags.svg}
                      alt="images-countries"
                      className="img-countries"
                    />{" "}
                  </Link>
              <p key={uuidv4()} className="title-card">
                {item.name}
              </p>

              <section className="info-card">
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
    </main>
  );
};

export default CardRegion;
