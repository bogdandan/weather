import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { Weather } from ".";
import { makeTestApp } from "../shared";

export const handlers = [
  rest.get(
    "https://api.openweathermap.org/data/2.5/weather",
    (req, res, ctx) => {
      if (req.url.searchParams.get("q") === "Zalau") {
        return res(
          ctx.status(404),
          ctx.json({
            cod: "404",
            message: "city not found",
          }),
          ctx.delay(150)
        );
      }
      return res(
        ctx.json({
          coord: {
            lon: 23.05,
            lat: 47.2,
          },
          weather: [
            {
              id: 803,
              main: "Clouds",
              description: "broken clouds",
              icon: "04d",
            },
          ],
          base: "stations",
          main: {
            temp: 15.09,
            feels_like: 14.09,
            temp_min: 15.09,
            temp_max: 15.09,
            pressure: 1011,
            humidity: 55,
            sea_level: 1011,
            grnd_level: 981,
          },
          visibility: 10000,
          wind: {
            speed: 4.55,
            deg: 271,
            gust: 6.21,
          },
          clouds: {
            all: 84,
          },
          dt: 1649241057,
          sys: {
            country: "RO",
            sunrise: 1649217434,
            sunset: 1649264574,
          },
          timezone: 10800,
          id: 662334,
          name: "Zalău",
          cod: 200,
        }),
        ctx.delay(150)
      );
    }
  ),
];

describe(`${Weather.name}`, () => {
  let server: ReturnType<typeof setupServer>;

  beforeAll(() => {
    server = setupServer(...handlers);
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  it("should render a list of cities", async () => {
    render(makeTestApp(<Weather />));

    // NOTE: we have 10 cities and we have 2 progress bar one for weather icon and one for content
    expect((await screen.findAllByRole("progressbar")).length).toBe(20);
    expect(await screen.findByText(/Zalau/i)).toBeInTheDocument();
    expect(await screen.findByText(/retry/i)).toBeInTheDocument();
  });
});
