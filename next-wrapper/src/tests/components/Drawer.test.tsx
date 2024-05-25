import React from "react";
import { render, screen } from "@testing-library/react";
import { Drawer } from "@/components/Drawer";

describe("Drawer", () => {
  it("renders the drawer with toolbar and list items", () => {
    render(<Drawer />);

    const toolbarElement = screen.getByRole("toolbar");
    expect(toolbarElement).toBeInTheDocument();

    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(2);

    const listItemTextElements = screen.getAllByRole("listitemtext");
    const listItemTexts = listItemTextElements.map(
      (element) => element.textContent
    );
    expect(listItemTexts).toEqual([
      "Wallet connect pillar",
      "Wallet addresses pillar",
    ]);
  });
});
