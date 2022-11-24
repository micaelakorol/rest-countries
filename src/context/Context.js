import { createContext } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export const Context = createContext();

const UserProvider = ({ children }) => {
  //states:
  const [theme, setTheme] = useState(false);
  const [mostrarCard, setMostrarCard] = useState(true);
  const [value, setValue] = useState("");
  const [region, setRegion] = useState([]);
  const [regionCountries, setRegionCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  // capture value options
  const captureOption = (e) => {
    setValue(e.target.value);
  };

  //acceder a los valores del parametro de consulta:
  let [searchParams, setSearchParams] = useSearchParams();
  const handleChange = (e) => {
    let filter = e.target.value;
    if (filter) {
      setSearchParams({ filter });
    } else {
      setSearchParams({});
    }
  };

  return (
    <Context.Provider
      value={{
        theme,setTheme,mostrarCard,setMostrarCard,value,setValue,region,setRegion,
        regionCountries,setRegionCountries,captureOption,searchParams,setSearchParams,
        handleChange,loading,setLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default UserProvider;
