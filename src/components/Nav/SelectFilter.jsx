import React, { useContext } from "react";
import { Context } from "../../context/Context";
import { RegionFilter } from "../../services/API/requestNav";
import { select } from "../../services/initialValuesSelect/select";
import CaptureOption from "../../services/functions/captureOption";
const SelectFilter = () => {
  const { value } = useContext(Context);
  const { captureSelect } = CaptureOption();
  const { regionFilter } = RegionFilter();
  return (
    <section className="select">
      <select name="select" value={value} onChange={captureSelect}>
        <option value="" defaultValue={value} disabled>
          Filter by region
        </option>
        <option value="">All Countries</option>
        {select.map((item) => (
          <option key={item.id} onClick={() => regionFilter(value)}>
            {item.continent}
          </option>
        ))}
      </select>
    </section>
  );
};

export default SelectFilter;
