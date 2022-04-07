import { Unit } from "../reducers";

export const DEGREE_UNICODE = "\u00B0";

export function getTemperature(
  temperature: number,
  unit: Unit = "metric"
): string {
  switch (unit) {
    case "imperial":
      return `${temperature}${DEGREE_UNICODE} F`;
    case "metric":
      return `${temperature}${DEGREE_UNICODE} C`;
    default:
      return `${temperature}${DEGREE_UNICODE}`;
  }
}
