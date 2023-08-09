/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { useData } from "../../services/service";
import Spinners from "../../components/Loading/Spinners";
import "../../styles/infoCard.css";
import { v4 as uuidv4 } from "uuid";
import arrowLeft from "../../icons/arrow-left.svg";
import CardBody from "./CardElements/CardBody";
import OtherInfo from "./CardElements/OtherInfo";
import ImgCard from "./CardElements/ImgCard";
import useSpinner from "../../services/hook/useSpinner";

const InfoCard = () => {
  let params = useParams();
  const { data, loading, error } = useData(
    `https://restcountries.com/v2/name/${params.id}`
  );
  const Loading = useSpinner({loading,error})
  return (
    <main>
      {Loading}
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
