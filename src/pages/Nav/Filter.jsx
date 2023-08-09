import React, { useContext } from "react";
import { Context } from "../../context/Context";
import { RegionFilter } from "../../services/requestNav";
import { select } from "../../components/InitialValues/select";

const Filter = () => {
  const { value, captureOption } = useContext(Context);
  const { regionFilter } = RegionFilter();
  return (
    <section className="select">
      <select name="select" value={value} onChange={captureOption}>
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

export default Filter;
