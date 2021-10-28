import {
  CountryActions,
  CountryState,
  SEARCH_COUNTRY,
} from "./../../types/types";

const initialState: CountryState = { allCountries: [], searchTerm: "" };

export default function searchCountry(
  state = initialState,
  action: CountryActions
) {
  switch (action.type) {
    case SEARCH_COUNTRY: {
      const { searchTerm } = action.payload;
      if (searchTerm !== "") {
        const newList = state.allCountries.filter((c) => {
          return c.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
        return { ...state, filteredCountries: newList, searchTerm: searchTerm };
      }

      return state;
    }
    default:
      return state;
  }
}
