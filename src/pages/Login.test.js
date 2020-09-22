import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import user from '@testing-library/user-event';
import Login from './Login';

test('renders all inputs', () => {
  const { getByLabelText } = render(<Login />);
  const userInput = getByLabelText(/username/i);
  expect(userInput).toBeInTheDocument();
  const passwordInput = getByLabelText(/password/i);
  expect(passwordInput).toBeInTheDocument();
});

test('integration test', async () => {
  const USER = 'some-username';
  const PASS = 'some-pass';
  const { findByLabelText, findByText } = render(<Login />);
  const userInput = await findByLabelText(/username/i);
  user.type(userInput, USER);
  const passwordInput = await findByLabelText(/password/i);
  user.type(passwordInput, PASS);
  const submitButton = await findByText(/submit/i);

  fireEvent.click(submitButton);
  expect(await findByText(/your username/i)).toBeInTheDocument();
  expect(await findByText(/your password/i)).toBeInTheDocument();
});
