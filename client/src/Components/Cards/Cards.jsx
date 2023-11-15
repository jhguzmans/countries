import style from "./Cards.module.css";
import Card from "../Card/Card";

const Cards = ({ countries }) => {
  return (
    <div className={style.Cards}>
      {console.log("Los paises que llegan a las Cards son:")}
      {console.log(countries)}
      {countries?.map((country) => (
        <Card key={country.id} country={country} />
      ))}
    </div>
  );
};

export default Cards;
