import React from 'react';

export const Button = ({ onClick, type = 'button', children }) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
};
