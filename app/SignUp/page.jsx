
"use client"
import { SessionProvider, signIn } from "next-auth/react";
import { CognitoIdentityProviderClient, SignUpCommand } from '@aws-sdk/client-cognito-identity-provider'
import { useState, useEffect } from "react";
import ShowErrors from "../../utils/ShowErrors";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [psswd, setPsswd] = useState("");
  const [errors, setErrors] = useState([]); 
  const [confirmationCode, setConfirmationCode] = useState("");
  const [status, setStatus] = useState("idle");


  const hasUpperCase = /[A-Z]/;
  const hasLowerCase = /[a-z]/;
  const hasNumber = /[0-9]/;
  const hasSpecialChar = /[\^\$\*\.\[\]\{\}\(\)\?\!@\#%&\/,><'\":;\|_~`+=-]/;
  const isLongEnough = /.{8,}/;

  // ensures that the page is loaded over HTTPS
  if (typeof window !== 'undefined') {
    if (window.location.protocol !== 'https:' && process.env.NODE_ENV !== 'development') {
      console.error('This page must be loaded over HTTPS');
      setErrors([...errors, 'This page must be loaded over HTTPS'])
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
      })
    })
    if(resp.status === 200){
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
      })
    }).then((res) => res.json())
    .then( async ()=>
      await signIn("credentials", {
        username: email,
        password: psswd,
        redirect: true,
        callbackUrl: "/",
      }))
    .catch(() => (setErrors([...errors,"Unknown Error"])));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
        {status==="idle" ?
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
              <div className={`${!hasUpperCase.test(psswd) ? "text-red-500": "text-green-500"}`}>- uppercase letter</div>
              <div className={`${!hasLowerCase.test(psswd) ? "text-red-500": "text-green-500"}`}>- lowercase letter</div>
              <div className={`${!hasNumber.test(psswd) ? "text-red-500": "text-green-500"}`}>- number </div>
              <div className={`${!hasSpecialChar.test(psswd) ? "text-red-500": "text-green-500"}`}>- special char</div>
              <div className={`${!isLongEnough.test(psswd) ? "text-red-500": "text-green-500"}`}>- 8 digits long</div>

            </div>
            <button type="submit" className="w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600 focus:outline-none">Sign Up</button>
          </form>
          :
          <form onSubmit={handleConfirm}>
            <input  id="email" name="email" value={confirmationCode}
              required className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-400" 
              onChange={(e)=>{setConfirmationCode(e.target.value)}}/>
             <button type="submit" className="w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600 focus:outline-none">enter confirmation code</button>
          </form>
        }

        <ShowErrors errors={errors}/>
    </div>
  );
};


export default SignUpPage;
