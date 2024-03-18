// UseReducer hook
import {useReducer, useState} from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {count: state.count + 1, showText: state.showText} // returns counter with incremented value
    case "toggleShowText":
      return {count: state.count, showText: !state.showText}  // returns obj with current counter with changed value of showText value with opposite value
    default:
      return state;
  }
}
const ReducerHook = () => {
  // const [count, setCount] = useState(0);
  // const [showText, setShowText] = useState(true);
  const [state, dispatch] = useReducer(reducer, {count: 0, showText: true});
  return <>
    <h3>Reducer Hook</h3>
    <h5>{state.count}</h5>
    <button
      //here we are changing 2 state on a single action that is action
      /**
      * so we can reduce the states by using useRef
      */
      onClick={() => {
        // setCount(count + 1);
        // setShowText(!showText);
        dispatch({type: "INCREMENT"});
        dispatch({type: "toggleShowText"})
      }}
    >Click here
    </button>
    {state.showText && <p>This is a text</p>}
  </>
}

export default ReducerHook;

