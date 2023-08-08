import React, { useContext } from 'react'
import { Context } from '../../context/Context';

const HandleChangeParams = () => {
  //acceder a los valores del parametro de consulta:
  const {searchParams, setSearchParams} = useContext(Context)
  const handleChange = (e) => {
    let filter = e.target.value;
    if (filter) {
      setSearchParams({ filter });
    } else {
      setSearchParams({});
    }
  };
  return {handleChange, searchParams}
}

export default HandleChangeParams