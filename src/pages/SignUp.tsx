import React, { useState } from "react";
import welcomeImg from "../assets/city.jpg";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/authContext";
import { useArticleContext } from "../context/articlesContext";

const SignUp = () => {
  const { signup } = useAuthContext();
  const { setOpenLoader } = useArticleContext();
  const navigate = useNavigate();

  const [details, setDetails] = useState({ name: "", email: "", password: "" });
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (details.password.length < 6) {
      setPasswordError(true);
      return;
    }
    setOpenLoader(true);
    signup(details.name, details.email, details.password);
    setOpenLoader(false);
    navigate("/articles");
  };

  return (
    <div className="flex h-[88vh]">
      <div className="w-[40%] px-[30px] ">
        <h1 className="font-bioRhyme text-[4rem] text-center font-bold">
          Hi there!
        </h1>
        <p className="text-center text-[1.2rem]">Welcome to Verso</p>
        <button className="mt-[20px] w-full flex justify-center items-center gap-[10px] border-[black] border-[2px] py-[10px]">
          <FcGoogle />
          Sign Up With Google
        </button>
        <p className="my-[30px] font-bioRhyme font-bold text-[1.5rem] text-center">
          OR
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
          <input
            className="w-full border-[2px] border-black/40 py-[5px] px-[10px]"
            type="text"
            required
            value={details.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setDetails({ ...details, name: e.target.value });
            }}
            placeholder="Name"
          />
          <input
            className="w-full border-[2px] border-black/40 py-[5px] px-[10px]"
            type="email"
            required
            value={details.email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setDetails({ ...details, email: e.target.value });
            }}
            placeholder="Email"
          />
          <input
            className={`${
              passwordError ? "border-[red]" : "border-black/40"
            } w-full border-[2px] py-[5px] px-[10px]`}
            type="password"
            required
            value={details.password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setDetails({ ...details, password: e.target.value });
              setPasswordError(false);
            }}
            placeholder="Password"
          />
          {passwordError && (
            <p className="text-[red] font-medium text-center">
              Password should be at least 6 characters
            </p>
          )}
          <button className="w-full text-white text-[1.3rem] bg-black  py-[10px]">
            CREATE ACCOUNT
          </button>
        </form>
        <p className="text-center text-[1.1rem]">
          Already have an account?{" "}
          <Link className="text-blue-700" to="/signin">
            Sign In
          </Link>
        </p>
      </div>

      <div className="fixed z-[-1] right-0 top-0 w-[60%] h-full">
        <img
          className="h-full w-full object-cover object-center"
          src={welcomeImg}
          alt="welcome_img"
        />
      </div>
    </div>
  );
};

export default SignUp;
