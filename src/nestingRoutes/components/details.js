import {useParams} from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  return <>
    <h3>Showing details of particular product with productId:{params.id}</h3>
  </>
}
export default ProductDetails;
