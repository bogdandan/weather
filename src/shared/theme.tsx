import { createContext, ReactNode, useContext, useState } from "react";
import {
  createTheme,
  Theme as MuiTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";

type Theme = "light" | "dark";

export interface ThemeContext {
  currentTheme: Theme;
  changeTheme: (theme: Theme) => void;
}

const Context = createContext<ThemeContext | null>(null);

export function useThemeContext(): ThemeContext {
  const context = useContext(Context);
  if (context === null) {
    throw new Error(
      "You cannot use 'useThemeContext' outside of 'ThemeProvider'"
    );
  }
  return context;
}

// A custom theme for this app
const theme: Record<Theme, MuiTheme> = {
  light: createTheme({
    palette: {
      mode: "light",
    },
  }),
  dark: createTheme({
    palette: {
      mode: "dark",
    },
  }),
};

export function ThemeProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [currentTheme, changeTheme] = useState<Theme>("light");

  return (
    <MuiThemeProvider theme={theme[currentTheme]}>
      <Context.Provider value={{ currentTheme, changeTheme }}>
        {children}
      </Context.Provider>
    </MuiThemeProvider>
  );
}
