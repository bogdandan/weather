import { Grid } from "@mui/material";
import { useAppSelector } from "../shared";
import { selectCities } from "./reducers";
import { WeatherActions } from "./WeatherActions";
import { WeatherWidget } from "./WeatherWidget";

export function Weather(): JSX.Element | null {
  const cities = useAppSelector(selectCities);

  return (
    <>
      <WeatherActions />
      <Grid container gap={2}>
        {cities.map((cityName) => (
          <Grid key={cityName} item xs={12} md={3}>
            <WeatherWidget cityName={cityName} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
