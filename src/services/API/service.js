/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";

export const useData = (url) => {
  const [data, setData] = useState([]);
  const [error,setError] = useState('')
  const { loading, setLoading } = useContext(Context);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((e) => setError(`${e} Error`))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, error, loading };
};
