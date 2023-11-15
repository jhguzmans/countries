import {
  GET_COUNTRIES,
  SEARCH_COUNTRY,
  FILTER_CONTINENT,
  FILTER_ACTIVITY,
  SORT,
} from "./action-types";

const initialState = {
  allCountries: [],
  countryName: [],
  filtered: [],
  currentPage: 1,
  currentCountries: [],
  sorted: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COUNTRIES:
      return {
        ...state,
        currentCountries: payload,
        allCountries: payload,
      };
    case SEARCH_COUNTRY:
      return {
        ...state,
        currentCountries: payload,
      };
    //  case RESET_SEARCH:
    //    return {
    //      ...state,
    //      currentCountries: payload,
    //      pokeName: [],
    //    };

    case FILTER_ACTIVITY:
      return {
        ...state,
        filtered: payload,
        currentCountries: payload,
      };
    case FILTER_CONTINENT:
      return {
        ...state,
        filtered: payload,
        currentCountries: payload,
      };

    case SORT:
      return {
        ...state,
        currentCountries: payload,
        sorted: payload,
      };

    //  case NEXT_PAGE:
    //    return {
    //      ...state,
    //      currentPage: state.currentPage + 1,
    //    };

    //  case PREV_PAGE:
    //    return {
    //      ...state,
    //      currentPage: state.currentPage - 1,
    //    };

    //  case SET_PAGE:
    //    return {
    //      ...state,
    //      currentPage: payload,
    //    };

    //  case CURRENT_POKEMONS:
    //    return {
    //      ...state,
    //      currentCountries: payload,
    //    };
    default:
      return state;
  }
};

export default reducer;
