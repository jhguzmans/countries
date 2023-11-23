import { useDispatch, useSelector } from "react-redux";
import Paginado from "../../Components/Paginado/Paginado";
import Cards from "./../../Components/Cards/Cards";
import { reset_search } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  const renderCountries = useSelector((state) => state.renderCountries);
  const currentCountries = useSelector((state) => state.currentCountries);
  const handleMostrar = () => {
    dispatch(reset_search(currentCountries));
  };
  return (
    <div>
      {<Cards countries={renderCountries} />}
      {renderCountries.length === 1 ? (
        <button onClick={handleMostrar}>Mostrar todos</button>
      ) : (
        <div></div>
      )}
      <Paginado />
    </div>
  );
};
export default Home;
