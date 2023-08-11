import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";

export const useRequest = (url) => {
  const [data, setData] = useState([]);
  const { setMessage} = useContext(Context);
  useEffect(() => {
   setMessage('Loading...')
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((e) => setMessage(`${e} Error`))
      .finally(() => setMessage(''))
  }, [url]);

  return { data };
};