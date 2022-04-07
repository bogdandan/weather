import { ReactNode } from "react";
import { Provider } from "react-redux";

import { store } from "../store";
import { ThemeProvider } from "./theme";

/**
 *
 * @param children Component to render
 * @returns Test app boostrap in all relevant providers
 */
export function makeTestApp(children: ReactNode): JSX.Element {
  return (
    <ThemeProvider>
      <Provider store={store}>{children}</Provider>
    </ThemeProvider>
  );
}
