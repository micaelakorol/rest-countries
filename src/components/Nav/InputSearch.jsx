import "../../styles/nav.css";
import HandleChangeParams from "../../services/functions/handleChangeParams";

const InputSearch = () => {
  const { handleChange, searchParams } = HandleChangeParams();
  return (
    <section className="section-input">
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchParams.get("filter") || ""}
        onChange={handleChange}
        tabIndex="0"
      />
    </section>
  );
};

export default InputSearch;
