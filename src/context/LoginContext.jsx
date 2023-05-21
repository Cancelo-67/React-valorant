import { createContext, useContext, useState } from "react";

export const LoginContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  return (
    <LoginContext.Provider value={{ user, setUser }}>
      {children}
    </LoginContext.Provider>
  );
};

export default UserProvider;

export const useLoginContext = () => useContext(LoginContext);
