import React from 'react';
import Spinners from '../../components/Loading/Spinners';
import Error from '../../pages/ShowError/Error';

const useSpinner = ({ loading, error }) => {
  if (loading) {
    return <Spinners />;
  }
  if (error !== "") {
    return <Error />
  }
  return null;
};

export default useSpinner;
