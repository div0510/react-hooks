import Login from "./Login";
import User from "./User";
import {useState, createContext} from "react";


export  const AppContext = createContext(null);

const ContextHook = () => {
  const [username, setUsername] = useState("");


  return <>
    <hr/>
    <h3>Use Context Hook</h3>
    <AppContext.Provider value={{username, setUsername}}>

      <Login/> <User/>
    </AppContext.Provider>
    <hr/>
  </>
}
export default ContextHook;
