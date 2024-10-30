import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_small.jpg"
          alt="login-bg"
        />
      </div>
      <div className="absolute w-3/12 bg-black  bg-opacity-80 text-white p-12 mx-auto z-10 left-0 right-0 mt-24 rounded-lg">
        <form>
          <h1 className="text-xl my-4">{isSignIn ? "Sign In" : "Sign Up"}</h1>
          {!isSignIn && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full my-4 p-3 bg-gray-600"
            />
          )}

          <input
            type="text"
            placeholder="Email or mobile number"
            className="w-full my-4 p-3 bg-gray-600"
          />
          <input
            type="text"
            placeholder="Password"
            className="w-full my-4 p-3 bg-gray-600"
          />
          <button className="w-full bg-red-700 my-6 p-2 rounded-lg">
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>

          <p className="my-6 cursor-pointer" onClick={toggleSignIn}>
            {isSignIn
              ? "New to Netflix? Sign Up Now"
              : "Already registered? Sign In Now"}
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
