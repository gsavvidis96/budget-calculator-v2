import { Container, CssBaseline, Stack, ThemeProvider } from "@mui/material";
import { useMemo } from "react";
import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import { useEffectOnce } from "react-use";
import { togglePrefersDarkMode } from "./store/slices/base";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import createCustomTheme from "./theme";

const App = () => {
  const dispatch = useAppDispatch();

  const prefersDarkMode = useAppSelector((state) => state.base.prefersDarkMode);

  const theme = useMemo(() => {
    return createCustomTheme(prefersDarkMode);
  }, [prefersDarkMode]);

  useEffectOnce(() => {
    const prefersDarkModeLocalStorage = JSON.parse(
      localStorage.getItem("prefersDarkMode")!
    ); //get prefered mode from local storage

    if (prefersDarkModeLocalStorage === null) {
      //if prefered mode is not set
      const isSystemDarkMode =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme:dark)").matches; //check if system mode is dark mode;

      dispatch(togglePrefersDarkMode({ prefersDarkMode: isSystemDarkMode })); //set theme mode without setting local storage.
    } else {
      dispatch(
        togglePrefersDarkMode({ prefersDarkMode: prefersDarkModeLocalStorage }) //else set the mode from local storage
      );
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Stack sx={{ height: "100vh" }}>
        <Navbar />

        <Container
          maxWidth="xl"
          sx={{
            flexGrow: 1,
            padding: "20px",
            display: "flex",
            flexDirection: " column",
          }}
        >
          <Outlet />
        </Container>
      </Stack>
    </ThemeProvider>
  );
};

export default App;
