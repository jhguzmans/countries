import { useSelector, useDispatch } from "react-redux";
import { sort } from "../../redux/actions";

const Sort = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.allCountries);
  const filtered = useSelector((state) => state.filtered);

  const handleSelectAbc = (event) => {
    const selectedOrderAbc = event.target.value;
    dispatch(sort(selectedOrderAbc, "abc", allCountries, filtered));
  };

  const handleSelectPopulation = (event) => {
    const selectedOrderPopulation = event.target.value;
    dispatch(sort(selectedOrderPopulation, "att", allCountries, filtered));
  };

  return (
    <div>
      <div>
        <label>Ordenar por nombre: </label>
        <select id="abc" onChange={handleSelectAbc}>
          <option value="None">Ninguno</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
      </div>
      <div>
        <label>Ordenar por población: </label>
        <select id="att" onChange={handleSelectPopulation}>
          <option value="None">Ningnun</option>
          <option value="Mayor a menor">Mayor a menor</option>
          <option value="Menor a mayor">Menor a mayor</option>
        </select>
      </div>
    </div>
  );
};
export default Sort;
