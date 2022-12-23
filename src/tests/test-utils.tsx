import { PropsWithChildren, ReactElement } from "react";
import { render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import type { PreloadedState } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { AppStore, RootState, setupStore } from "../store";
import { RouterProvider } from "react-router-dom";
import router from "../router";

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
  router?: Boolean;
}

export function renderWithProviders(
  ui: ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): ReactElement {
    if (renderOptions.router) {
      return (
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      );
    } else {
      return <Provider store={store}>{children}</Provider>;
    }
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
