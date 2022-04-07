import { Button, Divider, LinearProgress, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Weather } from "../reducers";
import { getTemperature } from "../shared";

// NOTE: this can be replace with <Box display={"flex"} justifyContent="space-between">{...}<Box
// styled is used here as an example
const WeatherWidgetContentItemWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

function WeatherWidgetContentItem({
  label,
  value,
}: {
  label: string;
  value: string;
}): JSX.Element {
  return (
    <WeatherWidgetContentItemWrapper>
      <Typography variant="body1" fontWeight={"bold"}>
        {label}
      </Typography>
      <Typography variant="body2">{value}</Typography>
    </WeatherWidgetContentItemWrapper>
  );
}

export function WeatherWidgetContent({
  data,
  isLoading,
  isError,
  onRetry,
}: {
  data?: Weather;
  isLoading: boolean;
  isError: boolean;
  onRetry: () => void;
}): JSX.Element {
  if (isLoading) {
    return <LinearProgress />;
  } else if (isError || !data) {
    return (
      <>
        <Typography>
          Failed to fetch weather information, please{" "}
          <Button
            variant="text"
            onClick={() => {
              onRetry();
            }}
          >
            RETRY
          </Button>
        </Typography>
      </>
    );
  } else {
    return (
      <>
        <WeatherWidgetContentItem
          label="Temeprature"
          value={getTemperature(data.main.temp)}
        />
        <Divider sx={{ my: 0.5 }} />
        <WeatherWidgetContentItem
          label="Feels like"
          value={getTemperature(data.main.feels_like)}
        />
      </>
    );
  }
}
