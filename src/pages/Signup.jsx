import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import Toast from "./Toast";

export default function Signup() {
  const [post, setPost] = useState(null);
  const [pwdText, setPwdText] = useState("");
  const [rePwdText, setrePwdText] = useState("");
  //   console.log(pwdText.length);
  //   console.log(rePwdText.length);

  const toastDark = () => toast.error("enter same passwords both time");

  function createPost() {
    axios
      .post(baseURL, {
        email: { pwdText },
        password: { rePwdText },
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  return (
    <div>
      <div className="flex gap-[2.25rem] bg-gray-200 justify-between w-full h-screen">
        <div className="flex items-center ml-[200px]">
          <h1 className="text-6xl ml-[60px] text-[#2D67BF] font-bold mt-[-80px]">
            StackIdentity
          </h1>
        </div>
        <div className="border-2 mt-[150px] w-80 h-[350px] flex justify-center items-center bg-white rounded-xl mr-[200px]">
          <div className="w-full h-full flex flex-col items-center">
            <input
              className="mt-[20px] border-2 inline-block w-[80%] p-2"
              type="text"
              placeholder="Email"
            />
            <input
              className="mt-[20px] border-2 inline-block w-[80%] p-2 "
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPwdText(e.target.value);
              }}
            />
            <input
              className="mt-[20px] border-2 inline-block w-[80%] p-2 "
              type="password"
              placeholder="Re-Enter Password"
              onChange={(e) => {
                setrePwdText(e.target.value);
              }}
            />

            <button
              className="mt-[20px] w-[80%] bg-[#2D67BF] text-white rounded-xl p-2 hover:bg-[#082146] text-center "
              onClick={() => {
                if (pwdText.length !== rePwdText.length) {
                  toastDark();
                } else if (pwdText !== rePwdText) {
                  toastDark();
                }
              }}
            >
              Sign in
            </button>
            <ToastContainer />

            <div className="flex mt-[30px] gap-x-8">
              <button className="bg-[#2D67BF] w-[100px] text-white rounded-xl p-2 hover:bg-[#082146]">
                user
              </button>
              <button className="bg-[#2D67BF] w-[100px] text-white rounded-xl p-2 hover:bg-[#082146]">
                Admin
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
