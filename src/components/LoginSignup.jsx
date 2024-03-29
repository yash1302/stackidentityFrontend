import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function LoginSignup() {
  const [btnColor, setBtnColor] = useState(true);
  const [type, setType] = useState("");
  // const [admin, setAdmin] = useState(true);
  // console.log(user);
  return (
    <div className="flex gap-[2.25rem] bg-gray-200 justify-between w-full h-screen">
      <div className="flex items-center ml-[200px]">
        <h1 className="text-6xl ml-[60px] text-[#2D67BF] font-bold mt-[-80px]">
          StackIdentity
        </h1>
      </div>
      <div className="border-2 mt-[200px] w-80 h-96 flex justify-center items-center bg-white rounded-xl mr-[200px]">
        <form action="" className="w-full h-full flex flex-col items-center">
          <input
            className="mt-[20px] border-2 inline-block w-[80%] p-2"
            type="text"
            placeholder="Email"
          />
          <input
            className="mt-[20px] border-2 inline-block w-[80%] p-2 "
            type="password"
            placeholder="Password"
          />
          <Link
<<<<<<< HEAD
            to="/SignupPage"
=======
            to="/Signup"
>>>>>>> 839f2229f97016d49793c833582d3453e4c3ff90
            className="mt-[20px] w-[80%] bg-[#2D67BF] text-white rounded-xl p-2 hover:bg-[#082146] text-center "
          >
            <button>Signup</button>
          </Link>
          <Link
            to={type == "admin" ? "/admindashboard" : "/UserGroup"}
            className="mt-[20px] w-[80%] bg-[#2D67BF] text-white rounded-xl p-2 hover:bg-[#082146] text-center "
          >
            <button>Login</button>
          </Link>
          <button
            onClick={() => {
              alert("contact administrator");
            }}
            className="mt-[20px] text-sm text-[#2D67BF] cursor-pointer"
          >
            Forgot Password?
          </button>
          <div className="flex mt-[20px] gap-x-8">
            <Link>
              <button
                onClick={() => {
                  setBtnColor(!btnColor);
                  setType("user");
                  // console.log(user);
                }}
                style={{ background: type == "user" ? "#082146" : "#2D67BF" }}
                className="bg-[#2D67BF] w-[100px] text-white rounded-xl p-2"
              >
                user
              </button>
            </Link>
            <Link>
              <button
                onClick={() => {
                  setType("admin");
                  // console.log(admin);
                }}
                style={{ background: type == "admin" ? "#082146" : "#2D67BF" }}
                className="bg-[#2D67BF] w-[100px] text-white rounded-xl p-2"
              >
                Admin
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
