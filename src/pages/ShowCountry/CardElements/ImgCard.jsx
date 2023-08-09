import React from "react";

const ImgCard = ({ data }) => {
  return (
    <figure className="card-img">
      <img
        src={data.flags.svg}
        alt="images-countries"
        className="img-countries"
      />
    </figure>
  );
};

export default ImgCard;
