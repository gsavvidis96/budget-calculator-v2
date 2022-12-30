import { Navigate } from "react-router-dom";
import App from "../App";
import Login from "../views/Login";
import Home from "../views/Home";
import Budget from "../views/Budget";

export default [
  {
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:id",
        element: <Budget />,
      },
      {
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
  },
];
