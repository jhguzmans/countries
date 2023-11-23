import { useSelector, useDispatch } from "react-redux";
import { sort, clear_sorts } from "../../redux/actions";
import styles from "../Sort/Sort.module.css";

const Sort = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.allCountries);
  const currentCountries = useSelector((state) => state.currentCountries);

  const handleSelectAbc = (event) => {
    const selectedOrderAbc = event.target.value;
    dispatch(sort(selectedOrderAbc, "abc", allCountries, currentCountries));
  };

  const handleSelectPopulation = (event) => {
    const selectedOrderPopulation = event.target.value;
    dispatch(
      sort(selectedOrderPopulation, "att", allCountries, currentCountries)
    );
  };
  const handleClearSorts = () => {
    dispatch(clear_sorts(allCountries));
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
          <option value="None">Ninguno</option>
          <option value="Mayor a menor">Mayor a menor</option>
          <option value="Menor a mayor">Menor a mayor</option>
        </select>
      </div>
      <button className={styles.button} onClick={handleClearSorts}>
        Limpiar ordenamientos
      </button>
    </div>
  );
};
export default Sort;
