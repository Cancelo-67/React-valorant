import { createContext } from 'react'


const ContextFavoritos = React.createContext(
  
)
return (
  <favContext.Provider value={{fav, nofav}}>
    {children}
  </favContext.Provider>
)

export default ContextFavoritos