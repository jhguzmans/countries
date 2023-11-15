import {
  GET_COUNTRIES,
  SEARCH_COUNTRY,
  FILTER_ACTIVITY,
  FILTER_CONTINENT,
  SORT,
} from "./action-types";
import axios from "axios";

export const getCountries = () => {
  const URL = "http://localhost:3001/countries";
  return async (dispatch) => {
    try {
      const { data } = await axios.get(URL);
      if (!data.length) throw Error("No hay countries");
      else {
        return dispatch({
          type: GET_COUNTRIES,
          payload: data,
        });
      }
    } catch (error) {
      return error.message;
    }
  };
};
export const search_country = (name) => {
  return async (dispatch) => {
    const URL = "http://localhost:3001/countries";
    try {
      const { data } = await axios.get(`${URL}/?name=${name}`);
      if (data.name) {
        console.log("El país encontrado es:");
        console.log(data);
        return dispatch({
          type: SEARCH_COUNTRY,
          payload: [data],
        });
      } else {
        throw Error("No hay countries con ese nombre");
      }
    } catch (error) {
      return error.message;
    }
  };
};

// export const reset_search = (pokemons) => {
//   return (dispatch) => {
//     console.log("los pokemons en el reset search son:");
//     console.log(pokemons);
//     dispatch({
//       type: RESET_SEARCH,
//       payload: pokemons,
//     });
//   };
// };

export const filter_activity = (activity, countries) => {
  return (dispatch) => {
    console.log("la actividad con la que se deben filtar es:", activity);
    console.log("Los paises para filtrar en la action son:", countries);
    try {
      if (countries && countries.length > 0) {
        const countriesFiltered = countries.filter((country) => {
          return country.Activities.some((activi) => activi.name === activity);
        });
        if (countriesFiltered.length > 0) {
          dispatch({
            type: FILTER_ACTIVITY,
            payload: countriesFiltered,
          });
        } else {
          dispatch({
            type: FILTER_ACTIVITY,
            payload: countries,
          });
          throw new Error("No hay countries para filtrar");
        }
      } else {
        throw new Error("No hay countries para filtrar");
      }
    } catch (error) {
      console.error("Error en la acción filter_type:", error.message);
    }
  };
};

export const filter_continent = (continent, countries) => {
  return (dispatch) => {
    console.log("El continente con la que se deben filtar es:", continent);
    console.log("Los paises para filtrar en la action son:", countries);
    try {
      if (countries && countries.length > 0) {
        const countriesFiltered = countries.filter((country) => {
          return country.region === continent;
        });
        if (countriesFiltered.length > 0) {
          dispatch({
            type: FILTER_CONTINENT,
            payload: countriesFiltered,
          });
        } else {
          dispatch({
            type: FILTER_CONTINENT,
            payload: countries,
          });
          throw new Error("No hay countries para filtrar");
        }
      } else {
        throw new Error("No hay countries para filtrar");
      }
    } catch (error) {
      console.error("Error en la acción filter_type:", error.message);
    }
  };
};

// export const pokeRender = (data) => {
//   return (dispatch) => {
//     dispatch({
//       type: POKE_RENDER,
//       payload: data,
//     });
//   };
// };

export const sort = (orden, tipo, currentCountries, filtered) => {
  return (dispatch) => {
    let sortedCountries = [];
    if (filtered.length > 0) {
      sortedCountries = [...filtered];
    } else {
      sortedCountries = [...currentCountries];
    }

    if (tipo === "abc") {
      if (orden === "None")
        return (dispatch) => {
          dispatch({
            type: SORT,
            payload: sortedCountries,
          });
        };
      if (orden === "A-Z") {
        sortedCountries.sort((a, b) => {
          const nameA = a.name.toLowerCase();
          const nameB = b.name.toLowerCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
      } else {
        sortedCountries.sort((a, b) => {
          const nameA = a.name.toLowerCase();
          const nameB = b.name.toLowerCase();
          if (nameA > nameB) {
            return -1;
          }
          if (nameA < nameB) {
            return 1;
          }
          return 0;
        });
      }
    } else {
      if (orden === "None")
        return (dispatch) => {
          dispatch({
            type: SORT,
            payload: sortedCountries,
          });
        };
      if (orden === "Mayor a menor") {
        sortedCountries.sort((a, b) => b.population - a.population);
      } else {
        sortedCountries.sort((a, b) => a.population - b.population);
      }
    }

    dispatch({
      type: SORT,
      payload: sortedCountries,
    });
  };
};

// export const nextPage = (dispatch) => {
//   return dispatch({
//     type: NEXT_PAGE,
//   });
// };
// export const prevPage = (dispatch) => {
//   return dispatch({
//     type: PREV_PAGE,
//   });
// };
// export const setPage = (numberPage) => {
//   return (dispatch) => {
//     dispatch({
//       type: SET_PAGE,
//       payload: numberPage,
//     });
//   };
// };

// export const currentCountries = (
//   pokeRender,
//   indexOfFirstPokemon,
//   indexOfLastPokemon
// ) => {
//   const currentPokemon = pokeRender.slice(
//     indexOfFirstPokemon,
//     indexOfLastPokemon
//   );
//   return (dispatch) => {
//     dispatch({
//       type: CURRENT_POKEMONS,
//       payload: currentPokemon,
//     });
//   };
// };
