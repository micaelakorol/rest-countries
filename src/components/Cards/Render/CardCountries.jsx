import "../../../styles/card.css";
import CardRegion from "../FilteredByRegion/ShowCardRegion";
import { useData } from "../../../services/API/service";
import CardCountriesUI from "../AllCards/ShowCardCountries";
import useSpinner from "../../../services/hook/useSpinner";
// render both card (AllCard and FilterCard)
const CardCountries = () => {
  const { data, loading, error } = useData("https://restcountries.com/v2/all");
  const Loading = useSpinner({ loading, error });

  return (
    <>
      {Loading}
      <CardCountriesUI data={data} />
      <CardRegion />
    </>
  );
};

export default CardCountries;
