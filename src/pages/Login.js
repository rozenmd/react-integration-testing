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
    <div className="mx-auto w-full max-w-md">
      <h1 className="text-center text-3xl font-extrabold">Login</h1>
      <div className="bg-white mt-6 py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <Form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full">
          {formData ? (
            <div>
              {formData?.username ? (
                <div>Your username: {formData.username}</div>
              ) : null}
              {formData?.password ? (
                <div>Your password: {formData.password}</div>
              ) : null}
            </div>
          ) : null}
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
      </div>
    </div>
  );
}

export default Login;
