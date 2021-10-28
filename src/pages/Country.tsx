import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { AppState } from "../types/types";
import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import "../App.css";

export default function Country() {
  const { name } = useParams<{ name: string }>();
  const history = useHistory();

  const country = useSelector((state: AppState) =>
    state.countryCart.cartCountries.find((c) => c.name === name)
  );
  console.log("cart country=>", country);

  if (!country) {
    return <div>Country not found</div>;
  }

  return (
    <>
      <h1>Country page</h1>

      <Card className="country_card" sx={{ maxWidth: 445 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={country.flag}
            alt={country.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {country.name} | {country.region}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Button
        variant="contained"
        href="#contained-buttons"
        onClick={() => history.push("/")}
      >
        Back
      </Button>
    </>
  );
}
