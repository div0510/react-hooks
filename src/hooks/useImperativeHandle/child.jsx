import {forwardRef, useImperativeHandle, useState} from "react";

const ChildComp = forwardRef((props,ref) => {
  const [toggle, setToggle] = useState(false);
  useImperativeHandle(ref,()=>({
    alterToggle(){
      setToggle(!toggle);
    },
  }));
  return <>
    <button
      // onClick={() => {
      //   setToggle(!toggle)
      // }}
    >Button in Child
    </button>
    {toggle && <span>Toggle </span>}
  </>
});

export default ChildComp;
