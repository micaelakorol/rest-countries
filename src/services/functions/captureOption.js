import React, { useContext } from "react";
import { Context } from "../../context/Context";

const CaptureOption = () => {
  const { setValue } = useContext(Context);
  const captureSelect = (e) => {
    setValue(e.target.value);
  };
  return { captureSelect };
};

export default CaptureOption;
