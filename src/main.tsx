import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { Provider } from "react-redux";
import "./index.scss";
import router from "./router";
import { setupStore } from "./store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <Provider store={setupStore()}>
    <RouterProvider router={router} />
  </Provider>
  // </React.StrictMode>
);
