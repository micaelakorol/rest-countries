import "../../../styles/card.css";
import CardRegion from "../FilteredByRegion/CardRegion";
import { useData } from "../../../services/API/service";
import Spinners from "../../Loading/Spinners";
import CardCountriesUI from "../AllCards/CardCountriesUI";
// render both card (AllCard and FilterCard)
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
