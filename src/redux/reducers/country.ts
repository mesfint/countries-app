import {
  ADD_COUNTRY,
  CountryActions,
  CountryState,
  FETCH_COUNTRIES,
} from "./../../types/types";

const initialState: CountryState = { allCountries: [], searchTerm: "" };

export default function country(state = initialState, action: CountryActions) {
  switch (action.type) {
    case FETCH_COUNTRIES:
      return {
        ...state,
        allCountries: action.payload?.country,
      };

    default:
      return state;
  }
}
