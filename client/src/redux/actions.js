import {
  GET_COUNTRIES,
  GET_ACTIVITIES,
  SEARCH_COUNTRY,
  FILTER_ACTIVITY,
  FILTER_CONTINENT,
  SORT,
  NEXT_PAGE,
  SET_PAGE,
  PREV_PAGE,
  DO_CURRENT_COUNTRIES,
  RESET_SEARCH,
  CLEAR_FILTERS,
  CLEAR_SORTS,
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

export const getActivities = () => {
  const URL = "http://localhost:3001/activities";
  return async (dispatch) => {
    try {
      const { data } = await axios.get(URL);
      if (!data.length) throw Error("No hay actividades");
      else {
        return dispatch({
          type: GET_ACTIVITIES,
          payload: data,
        });
      }
    } catch (error) {
      return error.message;
    }
  };
};

export const deleteActivity = (id) => {
  return async (dispatch) => {
    try {
      const data = await axios.delete(`http://localhost:3001/activity/${id}`);
      console.log(data);
      dispatch(getActivities());
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

export const reset_search = (countries) => {
  return (dispatch) => {
    dispatch({
      type: RESET_SEARCH,
      payload: countries,
    });
  };
};

export const filter_activity = (activity, countries) => {
  return (dispatch) => {
    try {
      if (!countries || countries.length === 0) {
        throw new Error("No hay países para filtrar");
      }

      const countriesFiltered = countries.filter((country) => {
        return country.Activities.some((activi) => activi.name === activity);
      });

      if (countriesFiltered.length > 0) {
        dispatch({
          type: FILTER_ACTIVITY,
          payload: countriesFiltered,
        });
      } else {
        alert(
          "No se encontraron países que cumplan con las condiciones seleccionadas"
        );
      }
    } catch (error) {
      console.error("Error en la acción filter_activity:", error.message);
    }
  };
};

export const filter_continent = (continent, countries) => {
  if (continent === "Todos") {
    return (dispatch) => {
      dispatch({
        type: FILTER_CONTINENT,
        payload: countries,
      });
    };
  }
  return (dispatch) => {
    try {
      if (!countries || countries.length === 0) {
        throw new Error("No hay países para filtrar");
      }

      const countriesFiltered = countries.filter((country) => {
        return country.region === continent;
      });

      if (countriesFiltered.length > 0) {
        dispatch({
          type: FILTER_CONTINENT,
          payload: countriesFiltered,
        });
      } else {
        alert(
          "No se encontraron países que cumplan con las condiciones seleccionadas"
        );
      }
    } catch (error) {
      console.error("Error en la acción filter_continent:", error.message);
    }
  };
};

export const clear_filters = (allCountries) => {
  return {
    type: CLEAR_FILTERS,
    payload: allCountries,
  };
};

export const clear_sorts = (allCountries) => {
  return {
    type: CLEAR_SORTS,
    payload: allCountries,
  };
};

export const sort = (orden, tipo, currentCountries, filtered) => {
  return (dispatch) => {
    let sortedCountries = [];
    if (filtered && filtered.length > 0) {
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

export const nextPage = (dispatch) => {
  return dispatch({
    type: NEXT_PAGE,
  });
};
export const prevPage = (dispatch) => {
  return dispatch({
    type: PREV_PAGE,
  });
};
export const setPage = (numberPage) => {
  return (dispatch) => {
    dispatch({
      type: SET_PAGE,
      payload: numberPage,
    });
  };
};

export const doCurrentCountries = (
  countryRender,
  indexOfFirstCountry,
  indexOfLastCountry
) => {
  const currentCountry = countryRender.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );
  return (dispatch) => {
    dispatch({
      type: DO_CURRENT_COUNTRIES,
      payload: currentCountry,
    });
  };
};
