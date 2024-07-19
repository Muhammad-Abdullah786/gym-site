import React from "react";
import { useState, useContext } from "react";
import UserContext from "../context/UserContext";
function Login() {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div className="flex flex-col items-center justify-center  bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login
        </h1>
        <input
          className="bg-gray-100 border border-gray-300 rounded-lg w-full p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          value={username}
          placeholder="Username"
          onChange={(e) => {
            setusername(e.target.value);
          }}
        />
        <input
          className="bg-gray-100 border border-gray-300 rounded-lg w-full p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg w-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Login;
