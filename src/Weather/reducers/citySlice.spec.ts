import { citySliceReducer, sortCities } from "./citySlice";

describe("citySliceReducer", () => {
  it("should have predefined state", () => {
    expect(citySliceReducer(undefined, { type: "@@INIT" })).toEqual({
      sort: null,
      cities: [
        "Llanfairpwllgwyngyll",
        "London",
        "Cluj-Napoca",
        "Zalau",
        "New York",
        "Sidney",
        "Los Angeles",
        "Fuerstenfeldbruck",
        "Bucharest",
        "Melbourne",
      ],
    });
  });

  it("should sort cities Asc", () => {
    expect(citySliceReducer(undefined, sortCities("Asc"))).toEqual({
      sort: "Asc",
      cities: [
        "Bucharest",
        "Cluj-Napoca",
        "Fuerstenfeldbruck",
        "Llanfairpwllgwyngyll",
        "London",
        "Los Angeles",
        "Melbourne",
        "New York",
        "Sidney",
        "Zalau",
      ],
    });
  });

  it("should sort cities Desc", () => {
    expect(citySliceReducer(undefined, sortCities("Desc"))).toEqual({
      sort: "Desc",
      cities: [
        "Zalau",
        "Sidney",
        "New York",
        "Melbourne",
        "Los Angeles",
        "London",
        "Llanfairpwllgwyngyll",
        "Fuerstenfeldbruck",
        "Cluj-Napoca",
        "Bucharest",
      ],
    });
  });
});
