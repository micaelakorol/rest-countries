import "../../styles/card.css";
import CardRegion from "./FilteredByRegion/ShowCardRegion";
import ShowCardCountries from "./AllCards/ShowCardCountries";
import { useRequest } from "../../services/hook/useRequest";
// render both card (AllCard and FilterCard)
const CardCountries = () => {
  const { data } = useRequest("https://restcountries.com/v2/all");
  return (
    <>
      <ShowCardCountries data={data} />
      <CardRegion />
    </>
  );
};

export default CardCountries;
