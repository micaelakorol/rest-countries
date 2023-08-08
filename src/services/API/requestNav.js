/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { Context } from "../../context/Context";

export const RegionFilter = () => {
  const { setMostrarCard, setRegionCountries, setLoading , value} =
    useContext(Context);

  const regionFilter = async() => {

    if (value.length > 0 || value !== "") {
      setLoading(true);
      setMostrarCard(false);
      const url = `https://restcountries.com/v2/region/${value}`;
      try {
        const res = await fetch(url);
        const data = await res.json();
        setLoading(false);
        setRegionCountries(data);
      } catch (error) {
        return error;
      }
    } else {
      setMostrarCard(true);
    }
  };

useEffect(() => {
regionFilter()
},[value])

  return { regionFilter };
};
