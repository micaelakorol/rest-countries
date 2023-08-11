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
  const [searchParams, setSearchParams] = useSearchParams();
  const [message, setMessage] = useState('')
  return (
    <Context.Provider
      value={{
        theme,
        setTheme,
        mostrarCard,message, setMessage,
        setMostrarCard,
        value,
        setValue,
        region,
        setRegion,
        regionCountries,
        setRegionCountries,
        searchParams,
        setSearchParams,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default UserProvider;
