import React from "react";
import { Link } from "react-router-dom";
import "../styles/card.css";
const CardBodyR = ({ imageSrc, title, linkTo, className }) => {
  return (
    <>
      <Link to={linkTo} className="card-body">
        <img src={imageSrc} alt="country" className="img-countries" />
        <p className="title-card">{title}</p>
      </Link>
    </>
  );
};

export default CardBodyR;
