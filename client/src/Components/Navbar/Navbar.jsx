import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import Filter from "../Filter/Filter";
import Sort from "../Sort/Sort";
const Navbar = () => {
  return (
    <div className={style.Nav}>
      <img src="https://i.imgur.com/oJkBNgX.jpg" alt="globo" />
      <Link to="/home">Home</Link>
      <Link to="/create">Crear</Link>
      <SearchBar />
      <Filter />
      <Sort />
    </div>
  );
};

export default Navbar;
