import Child from "./child";
import {useRef} from "react";

const ParentComp = () => {
  const buttonRef = useRef(null);
  return <>
    <h3>Use Imperative Hook</h3>
    <button onClick={() => {
      buttonRef.current.alterToggle();
    }}>Button in Parent
    </button>
    <Child ref={buttonRef}/>
  </>
}

export default ParentComp;
