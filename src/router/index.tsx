import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../views/Home";

export default createBrowserRouter([
  {
    element: <App />,
    children: [
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
]);
