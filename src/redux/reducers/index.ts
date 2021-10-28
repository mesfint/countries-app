import { combineReducers } from "redux";

import countries from "./country";
import countryCart from "./countryCart";

const createRootReducer = () =>
  combineReducers({
    countries,
    countryCart,
  });

export default createRootReducer;
