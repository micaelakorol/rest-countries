/* eslint-disable react-hooks/exhaustive-deps */
import "../../styles/card.css";
import CardRegion from "./CardRegion";
import { useData } from "../../services/service";
import Spinners from "../Pures/Spinners";
import CardCountriesUI from "./UI/CardCountriesUI";

const CardCountries = () => {
  const { data, loading, error } = useData("https://restcountries.com/v2/all");
  if (loading) {
    return <Spinners />;
  }
  if (error !== "") {
    return alert("Error");
  }
  return (
    <>
      <CardCountriesUI data={data} />
      <CardRegion />
    </>
  );
};

export default CardCountries;
