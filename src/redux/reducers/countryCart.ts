import {
  ADD_COUNTRY,
  CountryActions,
  CountryCartState,
  REMOVE_COUNTRY,
} from "./../../types/types";

const initialState: CountryCartState = { cartCountries: [] };

export default function countryCart(
  state = initialState,
  action: CountryActions
) {
  switch (action.type) {
    case ADD_COUNTRY:
      const  country  = action.payload.country;
      if (state.cartCountries.find((c) => c.name === country.name)) {
        return state;
      }
      return {
        ...state,
        cartCountries: [...state.cartCountries, action.payload.country],
      };
    case REMOVE_COUNTRY: {
      const { country } = action.payload;
      const index = state.cartCountries.findIndex(
        (c) => c.name === country.name
      );
      if (index >= 0) {
        state.cartCountries.splice(index, 1);
        return { ...state, cartCountries: [...state.cartCountries] };
      }
      return state;
    }

    default:
      return state;
  }
}
