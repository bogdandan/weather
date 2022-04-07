import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Unit = "metric" | "imperial";

export interface Weather {
  id: number; // City ID
  timezone: number; // Shift in seconds from UTC
  name: string; // City name
  cod: number; // Internal parameter
  base: string; // Internal parameter
  dt: number; // Time of data calculation, unix, UTC
  weather: {
    id: number; // Weather condition id
    main: string; // Group of weather parameters (Rain, Snow, Extreme etc.)
    description: string; // Weather condition within the group. You can get the output in your language. Learn more
    icon: string; // Weather icon id
    iconUrl: string;
  }[];
  main: {
    temp: number; // Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
    feels_like: number; // Temperature. This temperature parameter accounts for the human perception of weather. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
    temp_min: number; // Minimum temperature at the moment. This is minimal currently observed temperature (within large megalopolises and urban areas). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
    temp_max: number; // Maximum temperature at the moment. This is maximal currently observed temperature (within large megalopolises and urban areas). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
    pressure: number; // Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data), hPa
    humidity: number; // Humidity units, %
  };
  visibility: number; // Visibility, meter. The maximum value of the visibility is 10km
  wind: {
    speed: number; // Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
    deg: number; // Wind direction, degrees (meteorological)
  };
  clouds: {
    all: number; // Cloudiness, %
  };
  coord: {
    lon: number; // City geo location, longitude
    lat: number; // City geo location, latitude
  };
  sys: {
    id: number;
    type: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
}

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_WEATHER_BASE_API,
  }),
  tagTypes: [],
  endpoints: (builder) => ({
    getWeatherByCity: builder.query<Weather, string>({
      query: (cityName: string, units: Unit = "metric") => {
        return {
          url: `weather`,
          params: {
            q: cityName,
            appid: process.env.REACT_APP_APPID,
            units,
          },
        };
      },
      transformResponse(apiResponse: Weather) {
        return {
          ...apiResponse,
          weather: apiResponse.weather.map((weather) => ({
            ...weather,
            iconUrl: `http://openweathermap.org/img/w/${weather.icon}.png`,
          })),
        };
      },
    }),
  }),
});

export const { useGetWeatherByCityQuery } = weatherApi;
