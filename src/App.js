import './App.css';
import StateHook from "./hooks/StateHook";
import ReducerHook from "./hooks/ReducerHook";
import EffectHook from "./hooks/EffectHook";
import UseRefHook from "./hooks/UseRefHook";
import Parent from "./hooks/useImperativeHandle/parent";
import ContextHook from "./hooks/ContextHook/ContextHook";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Home from "./understandingRouter/Home";
import {Data, dataLoader} from "./understandingRouter/Data";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>

        <Route path="/"/>
        <Route index element={<Home/>}/>
        <Route path="/data" element={<Data/>} loader={dataLoader}/>
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router}/>

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
