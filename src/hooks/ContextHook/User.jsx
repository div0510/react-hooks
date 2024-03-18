import {useContext} from "react";
import {AppContext} from "./ContextHook";

const User = () => {

  const {username} = useContext(AppContext);
  return <>
    <h1>User: {username}</h1>
  </>
}

export default User;
