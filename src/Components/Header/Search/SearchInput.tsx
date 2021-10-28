import Search from "@mui/icons-material/Search";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../types/types";

import { searchCountry } from "../../../redux/actions/country";

export default function SearchInput() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: AppState)=> state.countries.searchTerm)

  return (
    <div>
      <input
        value={searchTerm}
        onChange={(e) => dispatch(searchCountry(e.target.value))}
        placeholder="Search country"
      />
    </div>
  );
}
