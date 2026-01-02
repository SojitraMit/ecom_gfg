import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEmail, addPassword } from "../utils/loginSlice";
import { userLogin } from "../utils/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useSelector((store) => store.login.email);
  const password = useSelector((store) => store.login.password);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const data = userLogin(email, password);
    navigate("/");
  };

  return (
    <div className=" mt-20 flex items-center justify-center ">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl shadow-red-700  p-8">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-[#5a2e0c] mb-8">
          Login
        </h1>

        <form onSubmit={handleFormSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Email address
            </label>
            <input
              type="email"
              required
              placeholder="abc@gmail.com"
              onChange={(e) => dispatch(addEmail(e.target.value))}
              className="w-full h-12 px-4 border border-gray-300 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              required
              placeholder="Enter your password"
              onChange={(e) => dispatch(addPassword(e.target.value))}
              className="w-full h-12 px-4 border border-gray-300 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full h-12 bg-red-500 text-white font-bold rounded-lg 
                       hover:bg-red-700 transition duration-300 shadow-md">
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Welcome back to{" "}
          <span className="font-semibold text-red-500">ShopIt</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
