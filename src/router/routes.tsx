import { Navigate } from "react-router-dom";
import App from "../App";
import Login from "../views/Login";
import About from "../views/About";
import Home from "../views/Home";

export default [
  {
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
  },
];
