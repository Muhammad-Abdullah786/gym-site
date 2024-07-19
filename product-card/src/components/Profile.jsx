import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user)
    return (
      <h1 className="flex items-center justify-center  text-2xl font-semibold text-gray-700 ">
        Please Login.
      </h1>
    );

  return (
    <div className="flex items-center justify-center ">
      <div className=" p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome, {user.username}!
        </h1>
      </div>
    </div>
  );
}

export default Profile;
