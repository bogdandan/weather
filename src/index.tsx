import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";

import { App } from "./App";
import { store } from "./store";
import { ThemeProvider } from "./shared";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./shared/mocks/browser");

  worker.start();
}

// NOTE: getElementById should never fail here, hence "!"
const appRoot = createRoot(document.getElementById("root")!);

appRoot.render(
  <StrictMode>
    <ThemeProvider>
      <CssBaseline />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
