import { DEGREE_UNICODE, getTemperature } from ".";
import { Unit } from "../reducers";

describe(`Weather/shared`, () => {
  describe(`${getTemperature.name}`, () => {
    it("should handle unknown unit system", () => {
      const unit: Unit = "" as unknown as any;
      expect(getTemperature(10, unit)).toBe(`10${DEGREE_UNICODE}`);
    });

    it("should default to metric unit system", () => {
      expect(getTemperature(10.5)).toBe(`10.5${DEGREE_UNICODE} C`);
    });

    it("should handle metric unit system", () => {
      expect(getTemperature(10.5, "metric")).toBe(`10.5${DEGREE_UNICODE} C`);
    });

    it("should handle imperial unit system", () => {
      expect(getTemperature(10.5, "imperial")).toBe(`10.5${DEGREE_UNICODE} F`);
    });
  });
});
