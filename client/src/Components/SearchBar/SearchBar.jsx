import { search_country } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState("");
  console.log(state);

  const handleChange = (event) => {
    setState(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Lo enviado es: " + state.toLowerCase());
    dispatch(search_country(state.toLowerCase()));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default SearchBar;
