import { useContext } from 'react'
import { Context } from '../../context/Context';

const FilterCountries = () => {
    const {searchParams} = useContext(Context)
     const filter = searchParams.get("filter");
  
    const filterCountries = (item) => {
        if (!filter) {
          return true;
        }
        const name = item.name.toLowerCase();
        return name.startsWith(filter.toLowerCase());
      };
  return {filterCountries}
}

export default FilterCountries