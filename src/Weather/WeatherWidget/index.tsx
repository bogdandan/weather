import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { useGetWeatherByCityQuery } from "../reducers";
import { WeatherWidgetAvatar } from "./WeatherWidgetAvatar";
import { WeatherWidgetContent } from "./WeatherWidgetContent";

export function WeatherWidget({ cityName }: { cityName: string }): JSX.Element {
  const { data, isLoading, isError, refetch } =
    useGetWeatherByCityQuery(cityName);

  return (
    <Card>
      <CardHeader
        title={
          <>
            <Typography variant="h5">{cityName}</Typography>
            {data?.weather[0]?.description ? (
              <Typography>( {data.weather[0].description} )</Typography>
            ) : null}
          </>
        }
        avatar={
          <WeatherWidgetAvatar
            isLoading={isLoading}
            isError={isError}
            iconUrl={data?.weather[0].iconUrl}
          />
        }
      />
      <CardContent>
        <WeatherWidgetContent
          isLoading={isLoading}
          isError={isError}
          onRetry={refetch}
          data={data}
        />
      </CardContent>
    </Card>
  );
}
