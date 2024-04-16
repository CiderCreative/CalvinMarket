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
          }),
      )
      .catch(() => setErrors([...errors, "Unknown Error"]));
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-primary">
      <div className="absolute top-10">
        <Logo />
      </div>

      <h2 className="mb-10 text-xl font-bold text-primary lg:text-2xl">
        Sign Up
      </h2>

      {status === "unsent" ? (
        <form
          onSubmit={handleSubmit}
          className="w-[80vw] max-w-[300px] sm:w-[300px]"
        >
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
              className="input-clear w-full rounded-md border-[1px] border-opposite px-3 py-2 "
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

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
              className="input-clear mb-2 w-full rounded-md border-[1px] border-opposite px-3 py-2"
            />

            {/* Display list of missing password requirements */}
            {passwordRequirements.filter(
              (requirement) => !requirement.test.test(psswd),
            ).length > 0 && (
              <div className="flex flex-col">
                <p className="my-2 font-semibold">Password needs:</p>
                {passwordRequirements
                  .filter((requirement) => !requirement.test.test(psswd))
                  .map((requirement, index, array) => (
                    <span key={index} className="text-red-500">
                      {requirement.message}
                      {index < array.length - 1 ? ", " : ""}
                    </span>
                  ))}
              </div>
            )}
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-yellow py-2 text-dark transition-all duration-200 hover:scale-[102%] hover:opacity-80 active:scale-95"
          >
            Sign Up
          </button>
        </form>
      ) : (
        <form
          onSubmit={handleConfirm}
          className="w-[80vw] max-w-[300px] sm:w-[300px]"
        >
          <p className="mb-2 font-medium">
            Enter the confirmation code sent to your Calvin email
          </p>
          <input
            id="confirmationCode"
            name="confirmationCode"
            value={confirmationCode}
            required
            className="input-clear mb-3 w-full rounded-md border-[1px] border-opposite px-3 py-2"
            onChange={(e) => {
              setConfirmationCode(e.target.value);
            }}
          />
          <button
            type="submit"
            className="w-full text-balance rounded-md bg-yellow px-2 py-2 font-semibold text-dark transition-all duration-200 hover:scale-[102%] hover:opacity-80 active:scale-95"
          >
            Submit code
          </button>
        </form>
      )}
      <Link
        href="/LogIn"
        className="mt-5 w-[80vw] max-w-[300px] text-left text-neutral-500 hover:opacity-80 sm:w-[300px]"
      >
        Already have an account?
      </Link>

      <ShowErrors errors={errors} setErrors={setErrors} />
    </div>
  );
};

export default SignUpPage;
