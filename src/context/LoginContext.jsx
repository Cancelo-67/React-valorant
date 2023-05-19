import { useState } from "react";
import { createContext } from "react";

export const LoginContext = createContext(false);

const LoginContext = ({ children }) => {
  const [user, setUser] = useState(true);

  return (
    <LoginContext.Provider value={{ user, setUser }}>
      {children}
    </LoginContext.Provider>
  );
};
