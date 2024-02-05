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
    <div className="min-h-screen flex flex-col items-center justify-center bg-primary">
      <div className="absolute top-10">
        <Logo />
      </div>

      <h2 className="text-xl lg:text-2xl font-bold mb-10 text-primary">
        Log In
      </h2>

      <form
        onSubmit={handleSubmit}
        className="w-[80vw] max-w-[300px] sm:w-[300px]"
      >
        {/* Email */}
        <div className="mb-4 w-full">
          <label htmlFor="email" className="text-base font-semibold mb-3">
            Calvin Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="abc@calvin.edu"
            required
            className="w-full border-[1px] border-opposite rounded-md py-2 px-3 input-clear"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        {/* Password  */}
        <div className="mb-6 w-full">
          <label htmlFor="password" className="text-base font-semibold mb-3">
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
            className="w-full border-[1px] border-opposite rounded-md py-2 px-3 input-clear"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-maroon text-white rounded-md py-2 hover:scale-[102%] hover:opacity-80 transition-all duration-200 active:scale-95"
        >
          Log In
        </button>
      </form>
      <Link
        href="/SignUp"
        className="w-[80vw] max-w-[300px] sm:w-[300px] text-left mt-5 text-neutral-500 hover:opacity-80"
      >
        Need to create an account?
      </Link>
    </div>
  );
};

export default SignInPage;
