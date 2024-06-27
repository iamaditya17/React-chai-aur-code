//Component
import React from "react";
import UserContext from "./UserContext";
import { useState } from "react";

function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  console.log(user);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
