import {useState} from "react";

const StateHook = () => {
  const [counter, setCounter] = useState(0);
  const [inputVal, setInputVal] = useState('');
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  const getInputValue = (e) => {
    setInputVal(e.target.value);
  }

  return <>
    <h3>State HOOK</h3>
    <div>
      <button onClick={decrement}>Decrement</button>
      {counter}
      <button onClick={increment}>Increment
      </button>
    </div>
    <h4>Taking input using state hook</h4>
    <input placeholder={"Enter some text "} onChange={getInputValue}/>
    <div> Your input here :- {inputVal}</div>

    <hr/>
  </>
}

export default StateHook;
