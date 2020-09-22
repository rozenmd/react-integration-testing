import React from 'react';

export const TextField = ({ htmlFor, label, id, name, type, innerRef }) => {
  return (
    <div>
      <label htmlFor={htmlFor}>{label}</label>
      <input name={name} id={id} type={type} ref={innerRef} />
    </div>
  );
};

export default TextField;
