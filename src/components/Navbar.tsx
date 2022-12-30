import {
  AppBar,
  Box,
  Button,
  IconButton,
  Stack,
  Toolbar,
  useTheme,
} from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { togglePrefersDarkMode } from "../store/slices/base";
import { Paid } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { Link } from "react-router-dom";

const Navbar = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const prefersDarkMode = useAppSelector((state) => state.base.prefersDarkMode);

  return (
    <AppBar
      position="static"
      color="inherit"
      sx={{
        boxShadow: "none",
        borderBottom: "1px solid",
        borderColor: "budgetCardBorder.main",
      }}
    >
      <Toolbar>
        <Stack
          sx={{ flexGrow: 1, alignItems: "center" }}
          gap={1}
          direction="row"
        >
          <Stack
            direction={"row"}
            sx={{ mr: "auto", alignItems: "center" }}
            gap={1}
          >
            <Paid fontSize="large" />

            <Box
              component={Link}
              to="/"
              sx={{
                color: "inherit",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "18px",
              }}
            >
              Budget Calculator
            </Box>
          </Stack>

          {/* <Button color="inherit" component={Link} to="/login">
            Login
          </Button> */}

          <Button variant="outlined">Logout</Button>

          <IconButton
            color="primary"
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
