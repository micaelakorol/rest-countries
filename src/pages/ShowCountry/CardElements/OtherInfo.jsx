import React from "react";

const OtherInfo = ({ data }) => {
  return (
    <>
      <section className="other-info">
        <p>Top Level Domain: {data.topLevelDomain}</p>
        <p>Currencies: {data.currencies ? data.currencies[0].code : "-"}</p>
        <p>Languages: {data.languages[0].name}</p>{" "}
      </section>
      <section className="geographical">
        <p>
          Border Countries:{" "}
          {data.borders ? data.borders.slice(0, 3).join("-") : "-"}
        </p>
      </section>
    </>
  );
};

export default OtherInfo;
