import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ChooseWalletDialog } from "./chooseWalletDialog";

describe("ChooseWalletDialog", () => {
  const mockOnWalletSelect = jest.fn();
  const mockOnClose = jest.fn();

  beforeEach(() => {
    render(
      <ChooseWalletDialog
        isOpen={true}
        onWalletSelect={mockOnWalletSelect}
        onClose={mockOnClose}
      />
    );
  });

  test("renders the dialog with correct title and description", () => {
    expect(screen.getByText("Choose your wallet")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Please select your wallet to connect to the application."
      )
    ).toBeInTheDocument();
  });

  test("calls onWalletSelect with the selected wallet name", () => {
    const walletButton = screen.getByText("Wallet Name");
    fireEvent.click(walletButton);
    expect(mockOnWalletSelect).toHaveBeenCalledWith("Wallet Name");
  });

  test("calls onClose when the dialog is closed", () => {
    const closeButton = screen.getByLabelText("Close");
    fireEvent.click(closeButton);
    expect(mockOnClose).toHaveBeenCalled();
  });
});
