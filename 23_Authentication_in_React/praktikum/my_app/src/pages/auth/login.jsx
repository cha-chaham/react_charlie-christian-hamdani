import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "@/utils/swal";
import React from "react";
import * as z from "zod";
import { login } from "@/utils/api/auth/api";

import Layout from "@/components/layout";
import { Input } from "@/components/input";
import Button from "@/components/button";
import { handleAuth } from "@/utils/state/redux/reducers/reducer";
import { useToken } from "@/utils/state/contexts/token-context";

const schema = z.object({
  username: z.string().min(1, { message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export default function Login() {
  const navigate = useNavigate();
  const { changeToken } = useToken();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  async function handleLogin(data) {
    try {
      const result = await login(data);
      changeToken(JSON.stringify(result));
      navigate("/");
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message,
        showCancelButton: false,
      });
    }
  }

  return (
    <Layout>
      <div className="mt-10">
        <h2 className="text-xl font-bold md:text-3xl">Login</h2>
      </div>
      <div className="mt-5 w-full px-[5rem] md:px-[10rem] lg:px-[20rem] xl:px-[30rem] 2xl:px-[45rem]">
        <form onSubmit={handleSubmit(handleLogin)}>
          <Input
            register={register}
            name="username"
            label="Username"
            type="text"
            errorMessage={errors.username?.message}
          />
          <Input
            register={register}
            name="password"
            label="Password"
            type="password"
            errorMessage={errors.password?.message}
          />
          <div className="w-full px-[2.5rem] md:px-[5rem] lg:px-[3rem] xl:px-[5rem] 2xl:px-[6rem]">
            <Button label="Submit" type="submit" />
          </div>
        </form>
      </div>
    </Layout>
  );
}
