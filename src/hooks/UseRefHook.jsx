import React, {useRef} from "react";

const UseRefHook = () => {
  const inputRef = useRef(null);
  const clickFun = () => {
    inputRef.current.focus()
    console.log(inputRef.current.value)
  };
  return <>
    <hr/>
    <h3>Use Ref Hook</h3>
    <h5>Show Name here </h5>
    <input placeholder="Type Here..." type='text' ref={inputRef}/>
    <button onClick={clickFun}>Change Name</button>
    <hr/>
  </>
}

export default UseRefHook;
