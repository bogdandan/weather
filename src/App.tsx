import {
  AppBar,
  Container,
  FormControlLabel,
  Switch,
  Toolbar,
} from "@mui/material";
import { useThemeContext } from "./shared";
import { Weather } from "./Weather";

export function App() {
  const { currentTheme, changeTheme } = useThemeContext();

  return (
    <>
      <AppBar position="sticky">
        <Toolbar sx={{ display: "flex", justifyContent: "flex-end" }}>
          <FormControlLabel
            label={"dark mode"}
            control={
              <Switch
                onClick={() =>
                  changeTheme(currentTheme === "light" ? "dark" : "light")
                }
              />
            }
          />
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 2 }}>
        <Weather />
      </Container>
    </>
  );
}
