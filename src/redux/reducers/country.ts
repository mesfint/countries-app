import {
  ADD_COUNTRY,
  CountryActions,
  CountryState,
  FETCH_COUNTRIES,
  SEARCH_COUNTRY,
} from "./../../types/types";

const initialState: CountryState = { allCountries: [],filteredCountries: [], searchTerm: "" };

export default function country(state = initialState, action: CountryActions) {
  switch (action.type) {
    case FETCH_COUNTRIES:
      return {
        ...state,
        allCountries: action.payload.country,
        filteredCountries: action.payload.country
      };
    case SEARCH_COUNTRY: {
      const searchTerm  = action.payload.searchTerm;
        const filteredCountries = state.allCountries.filter((c) => {
          return c.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
        return { ...state, filteredCountries, searchTerm };
    }

    default:
      return state;
  }
}
