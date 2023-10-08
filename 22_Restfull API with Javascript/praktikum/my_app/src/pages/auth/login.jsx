import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import React from "react";
import * as z from "zod";

import Layout from "@/components/layout";
import { Input } from "@/components/input";
import Button from "@/components/button";
import { handleAuth } from "@/utils/state/redux/reducers/reducer";

const schema = z.object({
  email: z.string().email().min(1, { message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  function handleLogin(data) {
    dispatch(handleAuth({ token: JSON.stringify(data), isLoggedIn: true }));
    navigate("/");
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
            name="email"
            label="Email"
            type="email"
            errorMessage={errors.email?.message}
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
