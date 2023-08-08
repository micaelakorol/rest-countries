import { createContext } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export const Context = createContext();

const UserProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);
  const [mostrarCard, setMostrarCard] = useState(true);
  const [value, setValue] = useState("");
  const [region, setRegion] = useState([]);
  const [regionCountries, setRegionCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();


  return (
    <Context.Provider
      value={{
        theme,
        setTheme,
        mostrarCard,
        setMostrarCard,
        value,
        setValue,
        region,
        setRegion,
        regionCountries,
        setRegionCountries,searchParams, setSearchParams,
        loading,
        setLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default UserProvider;
