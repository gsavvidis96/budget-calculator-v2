import { it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { renderRouter, renderWithProviders } from "../test/test-utils";
import { screen } from "@testing-library/react";

it("true to be true", () => {
  const user = userEvent.setup();
  renderWithProviders(renderRouter({ initialEntries: ["/about"] }));

  expect(screen.getByText(/xaxa/i)).toBeInTheDocument();

  expect(true).toBe(true);
});

it("false to be false", () => {
  renderWithProviders(renderRouter());

  expect(false).toBe(false);
});
