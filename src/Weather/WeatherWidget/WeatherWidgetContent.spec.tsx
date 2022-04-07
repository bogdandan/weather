import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { makeTestApp } from "../../shared";
import { WeatherWidgetContent } from "./WeatherWidgetContent";

describe(`${WeatherWidgetContent.name}`, () => {
  let retrySpy: jest.Mock;

  beforeEach(() => {
    retrySpy = jest.fn();
  });

  it("should show progress indicator", () => {
    render(
      makeTestApp(
        <WeatherWidgetContent
          isLoading={true}
          isError={false}
          data={undefined}
          onRetry={retrySpy}
        />
      )
    );

    const progressBar = screen.getByRole("progressbar");
    expect(progressBar).toBeInTheDocument();
    expect(retrySpy).toHaveBeenCalledTimes(0);
  });

  it("should render error message", () => {
    render(
      makeTestApp(
        <WeatherWidgetContent
          isLoading={false}
          isError={true}
          data={undefined}
          onRetry={retrySpy}
        />
      )
    );

    const errorMessage = screen.getByText(
      /Failed to fetch weather information, please/i
    );

    expect(errorMessage).toBeInTheDocument();
    expect(retrySpy).toHaveBeenCalledTimes(0);
  });

  it("should handle retry callback", async () => {
    const user = userEvent.setup();

    render(
      makeTestApp(
        <WeatherWidgetContent
          isLoading={false}
          isError={true}
          data={undefined}
          onRetry={retrySpy}
        />
      )
    );

    const retryButton = screen.getByText(/retry/i);

    await user.click(retryButton);

    expect(retrySpy).toHaveBeenCalledTimes(1);
    expect(retrySpy).toHaveBeenCalledWith();
  });

  it("should render error message if data is no present", () => {
    render(
      makeTestApp(
        <WeatherWidgetContent
          isLoading={false}
          isError={false}
          data={undefined}
          onRetry={retrySpy}
        />
      )
    );

    const errorMessage = screen.getByText(
      /Failed to fetch weather information, please/i
    );

    expect(errorMessage).toBeInTheDocument();
    expect(retrySpy).toHaveBeenCalledTimes(0);
  });
});
