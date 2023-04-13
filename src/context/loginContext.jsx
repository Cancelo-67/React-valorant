import { createContext } from "react";

const ContextFavoritos = React.createContext();
return (
  <loginContext.Provider value={{ logged, nologged }}>
    {children}
  </loginContext.Provider>
);

export default ContextFavoritos;
