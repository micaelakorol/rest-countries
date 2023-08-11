/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import "../../styles/infoCard.css";
import { v4 as uuidv4 } from "uuid";
import CardBody from "./CardElements/CardBody";
import OtherInfo from "./CardElements/OtherInfo";
import ImgCard from "./CardElements/ImgCard";
import BtnBack from "./CardElements/BtnBack";
import { Context } from "../../context/Context";
import {useRequest } from "../../services/API";
{
  /*shows the card selected by the user with all the country information*/
}
const InfoCard = () => {
  const { message } = useContext(Context);
  let params = useParams();
  const { data } = useRequest(`https://restcountries.com/v2/name/${params.id}`);

  return (
    <main>
      <h1>{message}</h1>
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
