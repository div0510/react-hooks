import {Link, Outlet} from "react-router-dom";

const ProductsHome = () => {
  return <>
    <h2> I am PRODUCTS HOME </h2>
    <Link to="/product/search">Search</Link>
    <Link to="/product/all">All </Link>
    <Link to="/product/add">Add </Link>
    <Link to="/product/filter">Filter</Link>
    <Outlet/>
  </>
}

export default ProductsHome;
