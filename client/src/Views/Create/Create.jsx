import axios from "axios";
import Form from "../../Components/Form/Form";

const Create = () => {
  const newPokemon = async (userData) => {
    console.log("El userData en el Create es:");
    console.log(userData);
    try {
      const response = await axios.post(
        "http://localhost:3001/pokemon",
        userData
      );
      if (response.status === 200) {
        const data = response.data;
        console.log("Se creó el Pokémon correctamente, el Pokémon es:");
        console.log(data);
        return data;
      } else {
        console.error("No se pudo crear el Pokémon.");
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div>
      <Form newPokemon={newPokemon} />
    </div>
  );
};
export default Create;
