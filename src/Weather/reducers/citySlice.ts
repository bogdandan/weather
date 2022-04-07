import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

interface CityState {
  /**
   * NOTE: null means the list is not sorted yet
   */
  sort: "Asc" | "Desc" | null;
  cities: string[];
}

const initialState = {
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
} as CityState;

const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    sortCities(state, action: PayloadAction<"Asc" | "Desc">) {
      state.sort = action.payload;
      state.cities = state.cities.sort((city1, city2) => {
        if (city1 < city2) {
          return action.payload === "Asc" ? -1 : 1;
        } else if (city1 > city2) {
          return action.payload === "Asc" ? 1 : -1;
        } else {
          return 0;
        }
      });
    },
  },
});

export const { sortCities } = citySlice.actions;

export const selectCities = (state: RootState) => state.city.cities;

export const selectCurrentCitySort = (state: RootState) => state.city.sort;

export const citySliceReducer = citySlice.reducer;
