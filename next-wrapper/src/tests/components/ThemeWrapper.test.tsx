import { render } from "@testing-library/react";
import { Button } from "@mui/material";
import { ThemeWrapper } from "@/components/ThemeWrapper";

describe("ThemeWrapper", () => {
  it("renders children components", () => {
    const { getByText } = render(
      <ThemeWrapper>
        <div>Child Component</div>
      </ThemeWrapper>
    );

    expect(getByText("Child Component")).toBeInTheDocument();
  });

  it("applies theme to the button", () => {
    const { getByText } = render(
      <ThemeWrapper>
        <Button>Click me</Button>
      </ThemeWrapper>
    );

    const button = getByText("Click me");
    expect(button).toHaveStyle("background-color: rgba(191, 13, 185, 0.04)");
    expect(button).toHaveStyle("color: rgb(191, 13, 185)");
  });
});
