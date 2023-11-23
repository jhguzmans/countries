import {
  GET_COUNTRIES,
  SEARCH_COUNTRY,
  FILTER_CONTINENT,
  FILTER_ACTIVITY,
  CLEAR_FILTERS,
  CLEAR_SORTS,
  SORT,
  DO_CURRENT_COUNTRIES,
  SET_PAGE,
  NEXT_PAGE,
  PREV_PAGE,
  RESET_SEARCH,
  GET_ACTIVITIES,
} from "./action-types";

const initialState = {
  allCountries: [],
  countryName: [],
  filtered: [],
  filteredContinent: [],
  filteredActivity: [],
  currentPage: 1,
  currentCountries: [],
  sorted: [],
  activities: [],
  renderCountries: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COUNTRIES:
      return {
        ...state,
        currentCountries: payload,
        allCountries: payload,
      };
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: payload,
      };
    case SEARCH_COUNTRY:
      return {
        ...state,
        currentCountries: payload,
      };

    case RESET_SEARCH:
      return {
        ...state,
        currentCountries: state.allCountries,
        countryName: [],
      };

    case FILTER_ACTIVITY:
      return {
        ...state,
        filteredActivity: payload,
        currentCountries: payload,
        filtered: payload,
      };
    case FILTER_CONTINENT:
      return {
        ...state,
        filteredContinent: payload,
        currentCountries: payload,
        filtered: payload,
      };
    case CLEAR_FILTERS:
      return {
        ...state,
        filteredActivity: [],
        filteredContinent: [],
        currentCountries: payload,
      };
    case CLEAR_SORTS: {
      let newSort = [];
      if (state.filtered) {
        newSort = state.filtered;
      } else {
        newSort = payload;
      }
      return {
        ...state,
        sorted: [],
        currentCountries: newSort,
      };
    }

    case SORT:
      return {
        ...state,
        currentCountries: payload,
        sorted: payload,
      };

    case NEXT_PAGE:
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };

    case PREV_PAGE:
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };

    case SET_PAGE:
      return {
        ...state,
        currentPage: payload,
      };

    case DO_CURRENT_COUNTRIES:
      return {
        ...state,
        renderCountries: payload,
      };
    default:
      return state;
  }
};

export default reducer;
