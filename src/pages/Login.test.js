import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import Login from './Login';

test('integration test', async () => {
  const USER = 'some-username';
  const PASS = 'some-pass';

  render(<Login />);

  const userInput = screen.getByLabelText(/username/i);
  user.type(userInput, USER);
  const passwordInput = screen.getByLabelText(/password/i);
  user.type(passwordInput, PASS);
  const submitButton = screen.getByText(/submit/i);

  fireEvent.click(submitButton);
  expect(await screen.findByText(/your username/i)).toBeInTheDocument();
  expect(await screen.findByText(/your password/i)).toBeInTheDocument();
});
