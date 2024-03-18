import './App.css';
import StateHook from "./hooks/StateHook";
import ReducerHook from "./hooks/ReducerHook";
import EffectHook from "./hooks/EffectHook";
import UseRefHook from "./hooks/UseRefHook";
import Parent from "./hooks/useImperativeHandle/parent";
import ContextHook from "./hooks/ContextHook/ContextHook";

function App() {
  return (
    <>
      <StateHook></StateHook>
      <ReducerHook/>
      <EffectHook/>
      <UseRefHook/>
      <Parent/>
      <ContextHook/>
    </>
  );
}

export default App;
