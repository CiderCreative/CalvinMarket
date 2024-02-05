"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import ShowErrors from "../../utils/ShowErrors";
import Link from "next/link";
import { Logo } from "../../components/Global";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [psswd, setPsswd] = useState("");
  const [errors, setErrors] = useState([]);
  const [confirmationCode, setConfirmationCode] = useState("");
  const [status, setStatus] = useState("unsent");

  const passwordRequirements = [
    { test: /[A-Z]/, message: "Uppercase letter" },
    { test: /[a-z]/, message: "Lowercase letter" },
    { test: /[0-9]/, message: "Number" },
    {
      test: /[\^\$\*\.\[\]\{\}\(\)\?\!@\#%&\/,><'\":;\|_~`+=-]/,
      message: "Special character",
    },
    { test: /.{8,}/, message: "8 digits long" },
  ];

  // ensures that the page is loaded over HTTPS
  if (typeof window !== "undefined") {
    if (
      window.location.protocol !== "https:" &&
      process.env.NODE_ENV !== "development"
    ) {
      console.error("This page must be loaded over HTTPS");
      setErrors([...errors, "This page must be loaded over HTTPS"]);
      return;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({
        email,
        password: psswd,
      }),
    });
    if (resp.status === 200) {
      setStatus("confirm");
    } else {
      const jsonResponse = await resp.json();
      setErrors([...errors, jsonResponse.msg]);
    }
  };

  const handleConfirm = async (e) => {
    e.preventDefault();
    const result = await fetch("/api/auth/verifyEmail", {
      method: "POST",
      body: JSON.stringify({
        email,
        code: confirmationCode,
      }),
    })
      .then((res) => res.json())
      .then(
        async () =>
          await signIn("credentials", {
            username: email,
            password: psswd,
            redirect: true,
            callbackUrl: "/",
          })
      )
      .catch(() => setErrors([...errors, "Unknown Error"]));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primary">
      <div className="absolute top-10">
        <Logo />
      </div>

      <h2 className="text-xl lg:text-2xl font-bold mb-10 text-primary">
        Sign Up
      </h2>

      {status === "unsent" ? (
        <form
          onSubmit={handleSubmit}
          className="w-[80vw] max-w-[300px] sm:w-[300px]"
        >
          <div className="mb-4 w-full">
            <label htmlFor="email" className="text-base font-semibold mb-3">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="abc@calvin.edu"
              required
              className="w-full border-[1px] border-opposite rounded-md py-2 px-3 input-clear "
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

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
              className="w-full border-[1px] border-opposite rounded-md py-2 px-3 input-clear mb-2"
            />

            {/* Display comma-separated list of missing password requirements */}
            <div className="text-red-500">
              {passwordRequirements
                .filter((requirement) => !requirement.test.test(psswd))
                .map((requirement, index, array) => (
                  <span key={index}>
                    {requirement.message}
                    {index < array.length - 1 ? ", " : ""}
                  </span>
                ))}
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow text-dark rounded-md py-2 hover:scale-[102%] hover:opacity-80 transition-all duration-200 active:scale-95"
          >
            Sign Up
          </button>
        </form>
      ) : (
        <form
          onSubmit={handleConfirm}
          className="w-[80vw] max-w-[300px] sm:w-[300px]"
        >
          <input
            id="confirmationCode"
            name="confirmationCode"
            value={confirmationCode}
            required
            className="w-full border-[1px] border-opposite rounded-md py-2 px-3 input-clear mb-3"
            onChange={(e) => {
              setConfirmationCode(e.target.value);
            }}
          />
          <button
            type="submit"
            className="w-full bg-yellow text-dark rounded-md py-2 hover:scale-[102%] hover:opacity-80 transition-all duration-200 active:scale-95"
          >
            Enter confirmation code
          </button>
        </form>
      )}
      <Link
        href="/LogIn"
        className="w-[80vw] max-w-[300px] sm:w-[300px] text-left mt-5 text-neutral-500 hover:opacity-80"
      >
        Already have an account?
      </Link>

      <ShowErrors errors={errors} setErrors={setErrors} />
    </div>
  );
};

export default SignUpPage;
