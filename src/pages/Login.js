import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "../components/Button/Button";
import { TextField } from "../components/TextField/TextField";
import { Form } from "../components/Form/Form";

function Login() {
  const { register, handleSubmit } = useForm();
  const [formData, setFormData] = useState(null);

  const onSubmit = (data) => {
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

      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Username"
          id="username"
          type="text"
          register={register("username", { required: true })}
        />
        <TextField
          label="Password"
          id="password"
          type="password"
          register={register("password", { required: true })}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
}

export default Login;
