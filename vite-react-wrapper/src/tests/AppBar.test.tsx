import { render } from "@testing-library/react";
import { AppBar } from "@/components/AppBar";

describe("AppBar", () => {
  it("renders the app bar with the correct title", () => {
    const { getByText } = render(<AppBar />);
    const titleElement = getByText("Web3 Vite + React Wrapper");
    expect(titleElement).toBeInTheDocument();
  });
});
