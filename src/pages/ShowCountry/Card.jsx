/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { useData } from "../../services/API/service";
import Spinners from "../../components/Loading/Spinners";
import "../../styles/infoCard.css";
import { v4 as uuidv4 } from "uuid";
import arrowLeft from "../../icons/arrow-left.svg";
import CardBody from "./CardBody";
import OtherInfo from "./OtherInfo";
import ImgCard from "./ImgCard";

const InfoCard = () => {
  let params = useParams();
  const { data, loading, error } = useData(
    `https://restcountries.com/v2/name/${params.id}`
  );
  if (loading) {
    return <Spinners />;
  }
  if (error !== "") {
    return alert("Error");
  }
  return (
    <main>
      {data.map((data) => (
        <div className="container-dinamic" key={uuidv4()}>
          <section className="btn-dinamic">
            <NavLink to={"/"} className="back" alt="back">
              {" "}
              <img src={arrowLeft} alt="return-back" /> Back{" "}
            </NavLink>
          </section>
          <div className="container-card">
            <div className="card-img">
              <ImgCard data={data} />
            </div>
            <div className="container-info">
              <CardBody data={data} />
              <OtherInfo data={data} />
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default InfoCard;
