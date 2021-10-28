import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Search from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../types/types";
import { Link } from "react-router-dom";
import { removeCountry } from "../../redux/actions/country";
import DeleteIcon from "@mui/icons-material/Delete";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { TextField } from "@mui/material";

export default function SearchBar() {
  const [cartClicked, setCartClicked] = useState<boolean>(false);

  const countries = useSelector(
    (state: AppState) => state.countries?.allCountries
  );

  const handleInCartItemsDisplay = () => {
    setCartClicked(true);
    setCartClicked(!cartClicked);
  };
  const triggerToggle = () => {
    setCartClicked(!cartClicked);
  };
  const dispatch = useDispatch();
  const countriesCart = useSelector(
    (state: AppState) => state.countryCart.cartCountries
  );

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Country Info
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={handleInCartItemsDisplay}
              onChange={triggerToggle}
            >
              <Badge badgeContent={countriesCart.length} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <div>
        {countriesCart.length <= 0 && (
          <div className="noCountry">No country in cart</div>
        )}
        {cartClicked &&
          countriesCart.map((cart) => (
            <p key={cart.name}>
              <div className="cartContent">
                <div className="listCart">
                  <Link to={`/countries/${cart.name}`}>{`${cart.name}`}</Link>
                </div>
                <div>
                  <DeleteIcon
                    className="delete"
                    onClick={() => dispatch(removeCountry(cart))}
                  />
                </div>
              </div>
            </p>
          ))}
      </div>
    </div>
  );
}
