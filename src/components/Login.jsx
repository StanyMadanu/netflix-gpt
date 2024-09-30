import React, { useRef, useState } from "react";
import Header from "./Header";
import { validate } from "../utils/validate";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleValidate = () => {
    const errorMessage = validate(email.current.value, password.current.value);
    setErrorMessage(errorMessage);
  };

  return (
    <>
      <Header />
      <div className="absolute z-10">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_large.jpg"
          alt="background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black text-white w-4/12 z-20 my-36 right-0 left-0 mx-auto rounded-lg bg-opacity-85 p-16"
      >
        <h1 className="text-3xl font-bold my-8">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <div className="my-3">
            <input
              ref={name}
              className="w-full py-5 px-4 rounded-md bg-gray-900 bg-opacity-80 border border-gray-500"
              type="text"
              placeholder="Full Name"
            />
          </div>
        )}

        <div className="my-3">
          <input
            ref={email}
            className="w-full py-5 px-4 rounded-md bg-gray-900 bg-opacity-80 border border-gray-500"
            type="email"
            placeholder="Email or mobile number"
          />
        </div>
        <div className="my-4">
          <input
            ref={password}
            className="w-full py-5 px-4 rounded-md bg-gray-900 bg-opacity-80 border border-gray-500"
            type="password"
            placeholder="Password"
          />
        </div>
        <p className="text-red-500 font-bold">{errorMessage}</p>

        <button
          onClick={handleValidate}
          className="w-full my-5 py-3 bg-red-600 rounded-sm font-bold"
          type="submit"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        {isSignIn ? (
          <p className="cursor-pointer" onClick={toggleSignInForm}>
            New to Netflix? <span className="font-bold">Sign up now</span>.
          </p>
        ) : (
          <p className="cursor-pointer" onClick={toggleSignInForm}>
            Already registered? <span className="font-bold">Sign in now</span>.
          </p>
        )}
      </form>
    </>
  );
};

export default Login;
