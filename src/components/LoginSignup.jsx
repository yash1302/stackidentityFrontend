
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import jwt_decode from 'jwt-decode';



export default function LoginSignup() {
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // console.log('object')
      const response = await axios.post("http://localhost:3000/api/user/login", {
        employee_id: employeeId,
        password: password
      });
      // console.log(response.data.token)
      // console.log(response.data)

      const  token  = response.data.token;
      console.log("Token:", token);
      localStorage.setItem("token", token);

      navigate("/admindashboard");
      // if (response.data.role === "admin") {
      //   navigate("/admindashboard");
      // } else if (response.data.role === "user") {
      //   navigate("/UserPolicies");
      // }
    } catch (error) {
      if (error.response && error.response.data) {
        console.error("Login Error:", error.response.data); // Log the error message if response exists
        setError("Invalid email or password. Please try again.");
      } else {
        console.error("Login Error:", error); // Log the error if response doesn't exist
        setError("An unexpected error occurred. Please try again later.");
      }
    }
  };
  

  return (
    <div className="flex gap-[2.25rem] bg-gray-200 justify-between w-full h-screen">
      <div className="flex items-center ml-[200px]">
        <h1 className="text-6xl ml-[60px] text-[#2D67BF] font-bold mt-[-80px]">
          StackIdentity
        </h1>
      </div>
      <div className="border-2 mt-[200px] w-80 h-96 flex flex-col items-center justify-center bg-white rounded-xl mr-[200px]">
        <form onSubmit={handleLogin} className="w-full h-full flex flex-col items-center justify-center">
          <input
            type="text"
            placeholder="Employee ID"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            className="mt-[20px] border-2 inline-block w-[80%] p-2"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-[20px] border-2 inline-block w-[80%] p-2"
          />
          <div className="mt-[20px] w-[80%] bg-[#2D67BF] text-white rounded-xl p-2 hover:bg-[#082146] text-center">
            <button type="submit" className="">
              Login
            </button>
          </div>
            {error && <p className="text-red-500 w-[80%] text-center mt-2">{error}</p>}
            {/* {error && <Toast message={error} />} */}
          <Link to="/Signup" className="mt-[20px] w-[80%] bg-[#2D67BF] text-white rounded-xl p-2 hover:bg-[#082146] text-center">
            <button>Signup</button>
          </Link>
          <button
            onClick={() => {
              alert("Contact administrator");
            }}
            className="mt-[20px] text-sm text-[#2D67BF] cursor-pointer"
          >
            Forgot Password?
          </button>
        </form>
      </div>
    </div>



  );
}