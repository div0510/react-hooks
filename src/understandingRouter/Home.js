import {Link} from "react-router-dom";

const Home = () => {
  return <>
    <Link to={"/data"}  >Get dAta </Link>
    <h1>HOME HERE</h1>
    <Link to={"/product"}>Go to product</Link>
  </>
}
export default Home;
