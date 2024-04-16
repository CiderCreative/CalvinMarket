"use client";
import { signIn } from "next-auth/react";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { Logo } from "../../components/Global";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [psswd, setPsswd] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      username: email,
      password: psswd,
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-primary">
      <div className="absolute top-10">
        <Logo />
      </div>

      <h2 className="mb-10 text-xl font-bold text-primary lg:text-2xl">
        Log In
      </h2>

      <form
        onSubmit={handleSubmit}
        className="w-[80vw] max-w-[300px] sm:w-[300px]"
      >
        {/* Email */}
        <div className="mb-4 w-full">
          <label htmlFor="email" className="mb-3 text-base font-semibold">
            Calvin Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="abc@calvin.edu"
            required
            className="input-clear w-full rounded-md border-[1px] border-opposite px-3 py-2"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        {/* Password  */}
        <div className="mb-6 w-full">
          <label htmlFor="password" className="mb-3 text-base font-semibold">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="***********"
            required
            onChange={(e) => {
              setPsswd(e.target.value);
            }}
            value={psswd}
            className="input-clear w-full rounded-md border-[1px] border-opposite px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-maroon py-2 text-white transition-all duration-200 hover:scale-[102%] hover:opacity-80 active:scale-95"
        >
          Log In
        </button>
      </form>
      <Link
        href="/SignUp"
        className="mt-5 w-[80vw] max-w-[300px] text-left text-neutral-500 hover:opacity-80 sm:w-[300px]"
      >
        Need to create an account?
      </Link>
    </div>
  );
};

export default SignInPage;
