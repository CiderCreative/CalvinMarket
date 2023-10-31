
"use client"
import { SessionProvider, signIn } from "next-auth/react";
import React from 'react';
import { useState } from "react";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [psswd, setPsswd] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      email,
      password: psswd,
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
            <input type="email" id="email" name="email" value={email}
            required className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-400" 
            onChange={(e)=>{setEmail(e.target.value)}}/>
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-1">Password</label>
            <input type="password" id="password" name="password" required onChange={(e)=>{setPsswd(e.target.value)}} value={psswd}
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-400" />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600 focus:outline-none">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
