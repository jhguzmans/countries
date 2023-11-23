import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import Filter from "../Filter/Filter";
import Sort from "../Sort/Sort";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className={style.Nav}>
      <img
        src="https://c0.klipartz.com/pngpicture/508/419/gratis-png-ilustracion-de-globo-terrestre-globo-terraqueo-globo-terraqueo-thumbnail.png"
        alt="globo"
      />
      <Link to="/home">Home</Link>
      <Link to="/activities">Actividades</Link>
      {location.pathname !== "/activities" && <SearchBar />}
      {location.pathname !== "/activities" && <Filter />}
      {location.pathname !== "/activities" && <Sort />}
    </div>
  );
};

export default Navbar;
