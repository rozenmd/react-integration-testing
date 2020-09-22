import React from 'react';

export const TextField = ({ label, id, name, type, innerRef }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input name={name} id={id} type={type} ref={innerRef} />
    </div>
  );
};

export default TextField;
