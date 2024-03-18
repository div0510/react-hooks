import './App.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Home from "./understandingRouter/Home";
import {Data, dataLoader} from "./understandingRouter/Data";
import {ShowStates} from "./components/ShowStates";
import ProductsHome from "./nestingRoutes/components/home";
import {ProductSearch} from "./nestingRoutes/components/search";
import {AddProduct} from "./nestingRoutes/components/add";
import {ProductList} from "./nestingRoutes/components/list";
import {ProductFilter} from "./nestingRoutes/components/filter";
import {ProductsPage} from "./nestingRoutes";
import ProductDetails from "./nestingRoutes/components/details";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>

        <Route path="/"/>
        <Route index element={<Home/>}/>
        <Route path="/data" element={<Data/>} loader={dataLoader}/>
        <Route path="/show-states" element={<ShowStates/>}/>
        <Route path={"product"} element={<ProductsPage/>}>
          <Route path="search" element={<ProductSearch/>}/>
          <Route path="add" element={<AddProduct/>}/>
          <Route path="all" element={<ProductList/>}/>
          <Route path="filter" element={<ProductFilter/>}/>
          <Route path=":id" element={<ProductDetails/>}/>
        </Route>
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router}/>

    </>
  );
}

export default App;
