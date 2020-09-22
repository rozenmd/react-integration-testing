import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Form } from '../components/Form/Form';
import { Button } from '../components/Button/Button';
import { TextField } from '../components/TextField/TextField';

function Login() {
  const { register, handleSubmit } = useForm();
  const [formData, setFormData] = useState(null);

  const submitHandler = (data) => {
    setFormData(data);
  };

  return (
    <>
      {formData?.username ? (
        <div>Your username: {formData.username}</div>
      ) : null}
      {formData?.password ? (
        <div>Your password: {formData.password}</div>
      ) : null}

      <Form onSubmit={handleSubmit(submitHandler)}>
        <TextField
          name="username"
          id="username"
          label="Username"
          type="text"
          innerRef={register({ required: true })}
        />
        <TextField
          name="password"
          id="password"
          label="Password"
          type="password"
          innerRef={register({ required: true })}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
}

export default Login;
