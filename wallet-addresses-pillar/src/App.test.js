import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Wallet Addresses Pillar", () => {
  render(<App />);
  const pillarElement = screen.getByText(/I am the Wallet Addresses Pillar/i);
  expect(pillarElement).toBeInTheDocument();
});
