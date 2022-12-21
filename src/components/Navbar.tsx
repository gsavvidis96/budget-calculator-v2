import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  useTheme,
} from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { togglePrefersDarkMode } from "../store/slices/base";

const Navbar = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const prefersDarkMode = useSelector(
    (state: any) => state.base.prefersDarkMode
  );

  return (
    <AppBar position="static">
      <Toolbar>
        <Stack sx={{ flexGrow: 1 }} gap={1} direction="row">
          <Button color="inherit">About</Button>
          <Button color="inherit">Login</Button>

          <IconButton
            color="inherit"
            onClick={() =>
              dispatch(
                togglePrefersDarkMode({
                  prefersDarkMode: !prefersDarkMode,
                  saveToLocalStorage: true,
                })
              )
            }
          >
            {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
