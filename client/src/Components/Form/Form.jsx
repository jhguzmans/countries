import style from "./Form.module.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { getActivities } from "../../redux/actions";
import validation from "../../Components/Form/validation";
const Form = () => {
  const dispatch = useDispatch();
  const [selectedCountries, setSelectedCountries] = useState([]);
  const allCountries = useSelector((state) => state.allCountries);
  const [test, setTest] = useState(allCountries);
  const [successMessage, setSuccessMessage] = useState(null);
  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch, successMessage]);
  const newActivity = async (activityData) => {
    try {
      console.log("en el try, la actividad es: ", activityData);
      const response = await axios.post(
        "http://localhost:3001/activities",
        activityData
      );
      if (response.status === 200) {
        const data = response.data;
        console.log("Se creó la actividad correctamente, la actividad es:");
        console.log(data);
        return data;
      } else {
        console.error("No se pudo crear la actividad.");
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  const handleAddCountry = () => {
    setSelectedCountries([...selectedCountries, ""]);
  };

  const handleCountryChange = (index, value) => {
    const updatedCountries = [...selectedCountries];
    updatedCountries[index] = value;
    const test2 = test.filter(({ name }) => selectedCountries.includes(name));
    console.log(test2);
    setSelectedCountries(updatedCountries);
    setTest(test2);
  };
  const [activityData, setActivityData] = useState({
    name: "",
    dificult: "",
    duration: "",
    season: "",
    countriesName: selectedCountries,
  });
  const [errors, setErrors] = useState({
    name: "",
    dificult: "",
    duration: "",
    season: "Por favor seleccione una temporada",
  });

  const handleInputChange = (event) => {
    setActivityData((prevActivityData) => {
      const newActivityData = {
        ...prevActivityData,
        [event.target.name]: event.target.value,
      };
      validation(newActivityData, errors, setErrors, event);

      return newActivityData;
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await newActivity({
        ...activityData,
        countriesName: selectedCountries,
      });
      setSuccessMessage({
        message: "Actividad creada",
        details: data,
      });
    } catch (error) {
      console.error("No se pudo crear la actividad.", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <div className={style.container}>
        <label htmlFor="name">Nombre</label>
        <input
          autoComplete="name"
          name="name"
          type="text"
          placeholder="Ingrese el nombre de la actividad."
          value={activityData.name}
          onChange={handleInputChange}
        />
        {errors.name && <p className={style.danger}>{errors.name}</p>}

        <label htmlFor="dificult">Dificultad</label>
        <input
          autoComplete="dificult"
          name="dificult"
          type="number"
          placeholder="Ingrese la dificultad de la actividad"
          value={activityData.dificult}
          onChange={handleInputChange}
        />
        {errors.dificult && <p className={style.danger}>{errors.dificult}</p>}

        <label htmlFor="duration">Duración</label>
        <input
          autoComplete="duration"
          name="duration"
          type="number"
          placeholder="Ingrese el tiempo de duración de la actividad"
          value={activityData.duration}
          onChange={handleInputChange}
        />
        {errors.duration && <p className={style.danger}>{errors.duration}</p>}

        <label htmlFor="season">Temporada</label>
        <select
          name="season"
          id="season"
          value={activityData.season}
          onChange={handleInputChange}
        >
          <option value="seleccionar">Seleccionar</option>
          <option value="Verano">Verano</option>
          <option value="Otoño">Otoño</option>
          <option value="Invierno">Invierno</option>
          <option value="Primavera">Primavera</option>
        </select>
        {errors.season && <p className={style.danger}>{errors.season}</p>}

        <label htmlFor="Paises">Paises</label>
        {JSON.stringify(selectedCountries)}
        {selectedCountries.map((country, index) => (
          <select
            key={index}
            value={country}
            onChange={(e) => handleCountryChange(index, e.target.value)}
          >
            {test.map((country, i) => (
              <option key={i} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        ))}
        <button type="button" onClick={handleAddCountry}>
          +
        </button>
      </div>

      <button
        disabled={
          !activityData.name ||
          !activityData.dificult ||
          !activityData.duration ||
          //!activityData.season ||
          errors.name ||
          errors.dificult ||
          errors.duration ||
          errors.season
        }
        className={style.button}
        onClick={handleSubmit}
      >
        Crear
      </button>
      {successMessage && (
        <div className={style.successMessage}>
          <p>{successMessage.message}</p>
          {successMessage.details && (
            <div>
              <p>Detalles:</p>
              <p>El ID es: {successMessage.details.id}</p>
              <p>El nombre es: {successMessage.details.name}</p>
              <p>
                La duración de la actividad es:{" "}
                {successMessage.details.duration} horas
              </p>
              <p>
                La dificultad de de la actividad es de:{" "}
                {successMessage.details.dificult}
              </p>
              <p>
                La temporada para practicar la actividad es:{" "}
                {successMessage.details.season}
              </p>

              <p>Los paises en los que se puede practicar la actividad son:</p>
              {successMessage.details.countries.map((country) => (
                <p key={country.id}>{country.name}</p>
              ))}
            </div>
          )}
        </div>
      )}
    </form>
  );
};
export default Form;
