import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { Drawer } from "@/components/Drawer";

describe("Drawer", () => {
  it("renders the drawer with toolbar and list items", () => {
    render(
      <BrowserRouter>
        <Drawer />
      </BrowserRouter>
    );

    const toolbarElement = screen.getByRole("toolbar");
    expect(toolbarElement).toBeInTheDocument();

    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(1);

    const listItemTextElements = screen.getAllByRole("listitemtext");
    const listItemTexts = listItemTextElements.map(
      (element) => element.textContent
    );
    expect(listItemTexts).toEqual(["Wallet connect pillar"]);
  });
});
