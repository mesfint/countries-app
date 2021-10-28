import Search from "@mui/icons-material/Search";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../types/types";

import { searchCountry } from "../../../redux/actions/country";

export default function SearchInput() {
  const dispatch = useDispatch();

  return (
    <div>
      <input
        onChange={(e) => dispatch(searchCountry(e.target.value))}
        placeholder="Search country"
      />
    </div>
  );
}
