import { rest } from "msw";

export const handlers = [
  rest.get(
    `${process.env.REACT_APP_WEATHER_BASE_API}weather`,
    (req, res, ctx) => {
      const cityName = req.url.searchParams.get("q");

      if (cityName === "Zalau") {
        return res(
          ctx.status(404),
          ctx.json({
            cod: "404",
            message: "city not found",
          })
        );
      }

      // NOTE: returning undefined is going to forward the request to weather api
      return undefined;
    }
  ),
];
