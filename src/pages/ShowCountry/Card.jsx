/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import {  useParams } from "react-router-dom";
import { useData } from "../../services/API/service";
import "../../styles/infoCard.css";
import { v4 as uuidv4 } from "uuid";
import CardBody from "./CardElements/CardBody";
import OtherInfo from "./CardElements/OtherInfo";
import ImgCard from "./CardElements/ImgCard";
import useSpinner from "../../services/hook/useSpinner";
import BtnBack from "./CardElements/BtnBack";

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
            <BtnBack />
          </section>
          <div className="container-card">
            <ImgCard data={data} />
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
