import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import AddIcon from "@mui/icons-material/Add";
import { AppState } from "../types/types";
import { fetchData, addCountry } from "../redux/actions/country";
import SearchBar from "../Components/Header/SearchBar";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import SearchInput from "../Components/Header/Search/SearchInput";
import MyPage from "../contextApi/MyPage";

export default function Home() {
  const dispatch = useDispatch();

  const countries = useSelector(
    (state: AppState) => state.countries?.filteredCountries
  );

  //Get countries cart
  const countriesCart = useSelector(
    (state: AppState) => state.countryCart.cartCountries
  );

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      <SearchBar />
      <SearchInput />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Flag</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Population</TableCell>
              <TableCell align="right">Language</TableCell>
              <TableCell align="right">Region</TableCell>
              <TableCell align="right">ADD</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {countries.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">
                  <img className="flag" src={row.flag} alt={row.name}></img>
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.population}</TableCell>
                <TableCell align="right">{row.region}</TableCell>
                <TableCell align="right">
                  {row.languages.map((lang) => (
                    <li className="langList" key={lang.name}>
                      {lang.name}
                    </li>
                  ))}
                </TableCell>
                <TableCell
                  align="right"
                  onClick={() => dispatch(addCountry(row))}
                >
                  <AddIcon style={{ color: "#1976d2" }} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
