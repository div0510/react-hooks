import {useEffect, useState} from "react";
import axios from "axios";

const EffectHook = () => {
  const [responseData, setResponseData] = useState([{name: 'div'}, {name: 'verma'}])
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setResponseData((response.data))
    })
  }, []);
  // const users = JSON.parse(responseData);
  const generateList = () => {
    return responseData.map((user) => {
      return <li>{user.name}</li>
    });
  }
  return <>
    <hr/>
    <h3>Use Effect Hook</h3>
    {/*<ul>{users.map((user)=>(<li>{user.name}</li>))}</ul>*/}
    <ul>{generateList()}</ul>
  </>
}

export default EffectHook;
