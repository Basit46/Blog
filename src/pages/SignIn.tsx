import welcomeImg from "../assets/city.jpg";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuthContext } from "../context/authContext";

const SignIn = () => {
  const { signin } = useAuthContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-[88vh]">
      <div className="w-[40%] px-[30px] ">
        <h1 className="mt-[40px] font-bioRhyme text-[2.5rem] text-center font-bold">
          Welcome Back!
        </h1>

        <button className="mt-[20px] w-full flex justify-center items-center gap-[10px] border-[black] border-[2px] py-[10px]">
          <FcGoogle />
          Sign In With Google
        </button>
        <p className="my-[30px] font-bioRhyme font-bold text-[1.5rem] text-center">
          OR
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
          <input
            className="w-full border-[2px] border-black/40 py-[5px] px-[10px]"
            type="email"
            required
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
          />
          <input
            className="w-full border-[2px] border-black/40 py-[5px] px-[10px]"
            type="password"
            required
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          />
          <button className="w-full text-white text-[1.3rem] bg-black  py-[10px]">
            SIGN IN
          </button>
        </form>
        <p className="text-center text-[1.1rem]">
          Don't have an account?{" "}
          <Link className="text-blue-700" to="/signup">
            Sign Up
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

export default SignIn;
