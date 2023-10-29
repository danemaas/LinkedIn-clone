import React from "react";
import { useAuthContext } from "../context/AuthContext";

const logoUrl =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png";

const Login = () => {
  const { signInWithGoogle } = useAuthContext();
  return (
    <section className="w-full min-h-[100vh] grid place-items-center">
      <div className="min-w-[350px] h-max border-[1px] p-5 rounded-md">
        <h2 className="flex text-[2.5rem] font-bold w-max mx-auto mb-[1rem]">
          Linked
          <img src={logoUrl} className="w-[50px] h-[50px]" />
        </h2>
        <form className="flex flex-col gap-5 mb-[1.5rem]">
          <div className="flex flex-col relative group">
            <input
              type="text"
              className="p-2 border-2 outline-[#389FDD] group"
            />
            <label
              className="capitalize text-[1.1rem] py-[5px] px-1 bg-white leading-3
                absolute top-3 left-2 group-focus-within:-top-3 duration-300"
            >
              email
            </label>
          </div>
          <div className="flex flex-col relative group">
            <input type="text" className="p-2 border-2 outline-[#389FDD]" />
            <label
              className="capitalize text-[1.1rem] py-[5px] px-1 bg-white leading-3
                absolute top-3 left-2 group-focus-within:-top-3 duration-300"
            >
              password
            </label>
          </div>
          <div className="w-full flex justify-between">
            <div className="flex gap-1">
              <input type="checkbox" className="cursor-pointer" />
              <p className="capitalize">remember me</p>
            </div>
            <div>
              <p className="capitalize underline text-[#389FDD] cursor-pointer">
                forgot password?
              </p>
            </div>
          </div>
        </form>
        <div className="relative mb-[1.5rem]">
          <hr />
          <p className="bg-white px-1 rounded-full absolute -top-3 left-[8.7rem]">
            or
          </p>
        </div>
        <button
          onClick={signInWithGoogle}
          className="w-full mb-[2rem] capitalize border-[#389FDD] border-2 rounded-md py-1
          hover:bg-[#389FDD] hover:text-white hover:font-medium"
        >
          sign in with google
        </button>
        <div>
          <p>
            Are you new to LinkedIn?{" "}
            <span className="underline text-[#389FDD] cursor-pointer">
              Sign up
            </span>{" "}
            for free!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
