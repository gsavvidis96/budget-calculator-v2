import { it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../tests/test-utils";
import Navbar from "../components/Navbar";

it("true to be true", () => {
  const user = userEvent.setup();
  renderWithProviders(<Navbar />, { router: true });

  expect(true).toBe(true);
});

it("false to be false", () => {
  renderWithProviders(<Navbar />, { router: true });

  expect(false).toBe(false);
});
