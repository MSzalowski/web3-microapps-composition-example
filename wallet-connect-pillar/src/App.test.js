import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Wallet Connect Pillar", () => {
  render(<App />);
  const pillarElement = screen.getByText(/I am the Wallet Connect Pillar/i);
  expect(pillarElement).toBeInTheDocument();
});
