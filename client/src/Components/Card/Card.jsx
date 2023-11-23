import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ country }) => {
  return (
    <div className={style.contenedor}>
      <Link to={`/detail/${country.id}`}>
        <img src={country.flag} alt={country.name} />
        <p>{country.name}</p>
        <p>Continente</p>
        <p>{country.region}</p>
      </Link>
    </div>
  );
};

export default Card;
