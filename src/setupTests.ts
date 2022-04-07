// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

(process.env as unknown as any).REACT_APP_WEATHER_BASE_API =
  "https://api.openweathermap.org/data/2.5/";

(process.env as unknown as any).REACT_APP_APPID = "test";
