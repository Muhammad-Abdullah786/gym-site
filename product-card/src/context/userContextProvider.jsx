// this will be the userCOntextProvider where we need to provide which componett need any certain props

import React, { useState } from "react";
import UserContext from "./UserContext.js";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {/* // always pass info in it as object */}
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
