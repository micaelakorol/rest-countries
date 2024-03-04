import React, { useContext, useEffect } from "react";
import { Context } from "../../../context/Context";
import { RegionFilter } from "../../../services/API/RequestRegionFilter";
import { select } from "../../../services/initialValuesSelect/select";
import CaptureOption from "../functions/CaptureOption";
const SelectFilter = () => {
  const { value } = useContext(Context);
  const { captureSelect } = CaptureOption();
  const { regionFilter } = RegionFilter();
  
  useEffect(() => {
    regionFilter();
  }, [regionFilter]);

  return (
    <section className="select">
      <select name="select" value={value} onChange={captureSelect}>
        <option value="" defaultValue={value} disabled>
          Filter by region
        </option>
        <option value="">All Countries</option>
        {select.map((item) => (
          <option key={item.id}>{item.continent}</option>
        ))}
      </select>
    </section>
  );
};

export default SelectFilter;
