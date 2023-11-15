import style from "./Form.module.css";
import { useState, useEffect } from "react";
import validation from "../../Components/Form/validation";
import axios from "axios";

const Form = ({ newPokemon }) => {
  const [types, setTypes] = useState([]);
  useEffect(() => {
    const URL = "http://localhost:3001/gettypes";

    const getTypes = async () => {
      try {
        const { data } = await axios.get(URL);
        setTypes(data);
        console.log("Los tipos en el form son:");

        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getTypes();
  }, []);

  const [userData, setUserData] = useState({
    name: "",
    image: "",
    life: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    typeNames: [],
    typeNames1: [],
    typeNames2: [],
  });
  const [errors, setErrors] = useState({
    name: "",
    image: "",
    life: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    typeNames1: "",
    typeNames2: "",
  });
  const handleInputChange = (event) => {
    setUserData((prevUserData) => {
      const newUserData = {
        ...prevUserData,
        [event.target.name]: event.target.value,
      };
      validation(newUserData, errors, setErrors, event);

      return newUserData;
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    userData.typeNames = [userData.typeNames1, userData.typeNames2];
    newPokemon(userData);
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <div className={style.container}>
        <label htmlFor="name">Nombre</label>
        <input
          autoComplete="name"
          name="name"
          type="text"
          placeholder="Ingrese el nombre."
          value={userData.name}
          onChange={handleInputChange}
        />
        {errors.name && <p className={style.danger}>{errors.name}</p>}

        <label htmlFor="image">Imagen</label>
        <input
          autoComplete="image"
          name="image"
          type="text"
          placeholder="Copie y pegue el link de la imagen"
          value={userData.image}
          onChange={handleInputChange}
        />
        {errors.image && <p className={style.danger}>{errors.image}</p>}

        <label htmlFor="life">Vida</label>
        <input
          autoComplete="life"
          name="life"
          type="number"
          placeholder="Ingrese los puntos de vida"
          value={userData.life}
          onChange={handleInputChange}
        />
        {errors.life && <p className={style.danger}>{errors.life}</p>}

        <label htmlFor="attack">Ataque</label>
        <input
          autoComplete="attack"
          name="attack"
          type="number"
          placeholder="Ingrese los puntos de ataque"
          value={userData.attack}
          onChange={handleInputChange}
        />
        {errors.attack && <p className={style.danger}>{errors.attack}</p>}

        <label htmlFor="defense">Defensa</label>
        <input
          autoComplete="defense"
          name="defense"
          type="number"
          placeholder="Ingrese los puntos de defensa"
          value={userData.defense}
          onChange={handleInputChange}
        />
        {errors.defense && <p className={style.danger}>{errors.defense}</p>}

        <label htmlFor="speed">Velocidad</label>
        <input
          autoComplete="speed"
          name="speed"
          type="number"
          placeholder="Ingrese la velocidad"
          value={userData.speed}
          onChange={handleInputChange}
        />
        {errors.speed && <p className={style.danger}>{errors.speed}</p>}

        <label htmlFor="height">Altura</label>
        <input
          autoComplete="height"
          name="height"
          type="number"
          placeholder="Ingrese la altura en centimetros"
          value={userData.height}
          onChange={handleInputChange}
        />
        {errors.height && <p className={style.danger}>{errors.height}</p>}

        <label htmlFor="weight">Peso</label>
        <input
          autoComplete="weight"
          name="weight"
          type="number"
          placeholder="Ingrese el peso en kilogramos"
          value={userData.weight}
          onChange={handleInputChange}
        />
        {errors.weight && <p className={style.danger}>{errors.weight}</p>}

        <label htmlFor="typeNames">Tipos</label>
        <select name="typeNames1" id="typeNames1" onChange={handleInputChange}>
          {types.map((type, i) => (
            <option key={i} value={userData.typeNames1[0]}>
              {type.name}
            </option>
          ))}
        </select>
        <select name="typeNames2" id="typeNames2" onChange={handleInputChange}>
          {types.map((type, i) => (
            <option key={i} value={userData.typeNames2[0]}>
              {type.name}
            </option>
          ))}
        </select>
      </div>

      <button
        disabled={
          !userData.name ||
          !userData.image ||
          !userData.life ||
          !userData.attack ||
          !userData.defense ||
          errors.name ||
          errors.image ||
          errors.life ||
          errors.attack ||
          errors.defense ||
          errors.speed ||
          errors.height ||
          errors.weight ||
          errors.typeNames1 ||
          errors.typeNames2
        }
        className={style.button}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </form>
  );
};
export default Form;
