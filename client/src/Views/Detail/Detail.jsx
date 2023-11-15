import axios from "axios";
import { useEffect, useState } from "react";
import style from "./Detail.module.css";
import { Link, useParams } from "react-router-dom";
const URL = `http://localhost:3001/countries/`;

const Detail = () => {
  const [country, setCountry] = useState(null);
  const { id } = useParams();
  console.log("el id del pais que llega a detail es: ", id);
  useEffect(() => {
    const detailCountry = async () => {
      try {
        const { data } = await axios.get(`${URL}${id}`);
        setCountry(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    detailCountry();
  }, [id]);

  return (
    <div className={style.container}>
      {country ? (
        <>
          <div className="imagen">
            <img src={country.flag} alt={country.name} />
          </div>
          <div className="datos">
            <h1>{country.name}</h1>
            <p>ID: {country.id}</p>
            <p>Continente: {country.region}</p>
            <p>Capital: {country.capital}</p>
            <p>Subregión: {country.subregion}</p>
            <p>Area: {country.area} km^2</p>
            <p>Población: {country.population} habitantes</p>
            <p>Actividades:</p>
            {country.Activities && country.Activities.length > 0 ? (
              country.Activities.map((activity, i) => (
                <p key={i}>
                  {activity.name} - {activity.duration} hours
                </p>
              ))
            ) : (
              <p>No hay actividades disponibles</p>
            )}
          </div>
        </>
      ) : (
        <p>Cargando datos...</p>
      )}
      <button classid={style.button}>
        <Link to="/home">Home</Link>
      </button>
    </div>
  );
};

export default Detail;
