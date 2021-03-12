import React from "react";
import { screen, render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);
  const h2 = screen.queryByText("Checkout Form");
  expect(h2).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {
  render(<CheckoutForm />);
  const firstNameInput = screen.queryByLabelText("First Name:");
  const lastNameInput = screen.queryByLabelText("Last Name:");
  const addressInput = screen.queryByLabelText("Address:");
  const cityInput = screen.queryByLabelText("City:");
  const stateInput = screen.queryByLabelText("State:");
  const zipInput = screen.queryByLabelText("Zip:");
  const submitBtn = screen.queryByText("Checkout");
  const successMessage = await screen.findByTestId("successMessage");

  userEvent.type(firstNameInput, "John");
  userEvent.type(lastNameInput, "Doe");
  userEvent.type(addressInput, "fake address 000");
  userEvent.type(cityInput, "Los Angeles");
  userEvent.type(stateInput, "California");
  userEvent.type(zipInput, "90210");
  userEvent.click(submitBtn);

  expect(successMessage).toBeInTheDocument();
});
