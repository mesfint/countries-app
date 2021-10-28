import { Dispatch } from "redux";
import {
  FetchCountryAction,
  Country,
  FETCH_COUNTRIES,
  FETCH_COUNTRIES_SAGA,
  ADD_COUNTRY,
  REMOVE_COUNTRY,
  CountryActions,
  SEARCH_COUNTRY,
} from "./../../types/types";

export default function fetchCountries(country: Country[]): FetchCountryAction {
  return {
    type: FETCH_COUNTRIES,
    payload: {
      country,
    },
  };
}

export function addCountry(country: Country): CountryActions {
  return {
    type: ADD_COUNTRY,
    payload: {
      country,
    },
  };
}

export function removeCountry(country: Country): CountryActions {
  return {
    type: REMOVE_COUNTRY,
    payload: {
      country,
    },
  };
}

//Search country
export function searchCountry(searchTerm: string): CountryActions {
  console.log(searchTerm)
  return {
    type: SEARCH_COUNTRY,
    payload: {
      searchTerm,
    },
  };
}

export function fetchWithSaga() {
  return {
    type: FETCH_COUNTRIES_SAGA,
  };
}

//Fetch countries with thunk
//We call this fetchData from the I component to access the data

export function fetchData() {
  return (dispatch: Dispatch) => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((countries) => {
        dispatch(fetchCountries(countries));
      });
  };
}

//Fetch with  async await
// export function fetchDataWithAwait() {
//   //this is thunk
//   return async (dispatch: Dispatch) => {
//     const response = await fetch('https://restcountries.com/v2/all')
//     const countries = await response.json()
//     dispatch(fetchCountries(countries))
//   }
// }
