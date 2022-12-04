import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "./Login";

describe("Login form", () => {
  test("the form loads", () => {
    render(<Login />);
    expect(screen.getByText(/login/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("happy path", async () => {
    const USER = "some-username";
    const PASS = "some-pass";
    const user = userEvent.setup();

    render(<Login />);

    const userInput = screen.getByLabelText(/username/i);
    await user.type(userInput, USER);

    const passwordInput = screen.getByLabelText(/password/i);
    await user.type(passwordInput, PASS);

    const submitButton = screen.getByText(/submit/i);
    await user.click(submitButton);

    expect(await screen.findByText(/your username/i)).toBeInTheDocument();
    expect(await screen.findByText(/your password/i)).toBeInTheDocument();
  });
});
