import { useContext } from "react";
import { Context } from "../../context/Context";

export const RegionFilter = () => {
  const { setMostrarCard, setRegionCountries, setMessage, value } =
    useContext(Context);

  const regionFilter = async () => {
    if (value.length > 0 || value !== "") {
      setMessage("Loading..");
      setMostrarCard(false);
      const url = `https://restcountries.com/v2/region/${value}`;
      try {
        const res = await fetch(url);
        const data = await res.json();
        setRegionCountries(data);
        setMessage("");
      } catch (error) {
        setMessage("error");
      }
    } else {
      setMostrarCard(true);
    }
  };
  return { regionFilter };
};
