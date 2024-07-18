// this will be the userCOntextProvider where we need to provide which componett need any certain props

import React, { useState } from "react";
import userContext from "./userContext";

const userContextProvider = ({ childern }) => {
  const [user, setUser] = useState({});
  return (
    <userContext.Provider value={{ user, setUser }}>// always pass info in it as object
      {childern}
    </userContext.Provider>
  );
};

export default userContextProvider;
