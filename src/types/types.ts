// Action types

export const FETCH_COUNTRIES = "FETCH_COUNTRIES";
export const FETCH_COUNTRIES_SAGA = "FETCH_COUNTRIES_SAGA";
export const ADD_COUNTRY = "ADD_COUNTRY";
export const REMOVE_COUNTRY = "REMOVE_COUNTRY";
export const SEARCH_COUNTRY = "SEARCH_COUNTRY";

export type Language = {
  name: string;
  iso639_1: string;
};
export type Country = {
  name: string;
  flag: string;
  languages: Language[];
  population: number;
  region: string;
  alpha2Code?: string;
  nativeName: string;
};
export type clickedCart = {
  cartClicked: boolean;
  setCartClicked: () => void;
};

// action type for countries
export type FetchCountryAction = {
  type: typeof FETCH_COUNTRIES;
  payload: {
    country: Country[];
  };
};

//Create country state type
export type CountryState = {
  allCountries: Country[];
  searchTerm: string;
};

//Create country cart
export type CountryCartState = {
  cartCountries: Country[];
};

//AddCountry
export type AddCountryAction = {
  type: typeof ADD_COUNTRY;
  payload: {
    country: Country;
  };
};
//removeCountry
export type RemoveCountryAction = {
  type: typeof REMOVE_COUNTRY;
  payload: {
    country: Country;
  };
};
// Search Country
export type SearchCountryAction = {
  type: typeof SEARCH_COUNTRY;
  payload: {
    searchTerm: string;
  };
};

//Union country actions
export type CountryActions =
  | AddCountryAction
  | RemoveCountryAction
  | SearchCountryAction
  | FetchCountryAction;

export type AppState = {
  countries: CountryState;
  countryCart: CountryCartState;
};
