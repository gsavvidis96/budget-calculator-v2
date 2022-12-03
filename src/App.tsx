import { createTheme, CssBaseline, Stack, ThemeProvider } from "@mui/material";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import { useEffectOnce } from "react-use";
import { togglePrefersDarkMode } from "./store/slices/base";

const App = () => {
  const dispatch = useDispatch();

  const prefersDarkMode = useSelector(
    (state: any) => state.base.prefersDarkMode
  );

  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode: prefersDarkMode ? "dark" : "light",
      },
    });
  }, [prefersDarkMode]);

  useEffectOnce(() => {
    const prefersDarkModeLocalStorage = JSON.parse(
      localStorage.getItem("prefersDarkMode")!
    ); //get prevered mode from local storage

    if (prefersDarkModeLocalStorage === null) {
      //if prefered mode is not set
      const isSystemDarkMode =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme:dark)").matches; //check if system mode is dark mode;

      dispatch(togglePrefersDarkMode({ prefersDarkMode: isSystemDarkMode })); //set theme mode without setting local storage.
    } else {
      dispatch(
        togglePrefersDarkMode({ prefersDarkMode: prefersDarkModeLocalStorage })
      );
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Stack sx={{ height: "100vh" }}>
        <Navbar />
        <Outlet />
      </Stack>
    </ThemeProvider>
  );
};

export default App;
