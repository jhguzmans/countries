import style from "./Cards.module.css";
import Card from "../Card/Card";

const Cards = ({ countries }) => {
  return (
    <div className={style.Cards}>
      {countries?.map((country) => (
        <Card key={country.id} country={country} />
      ))}
    </div>
  );
};

export default Cards;
