import {useNavigate} from "react-router-dom";

export const ProductList = () => {
  const navigate = useNavigate();
  const id = 2;
  return <>
    <h2> This is ALL Products List Component</h2>
    <div
      onClick={() => {
        navigate(`/product/${id}`);
      }}
    >
      Show particular Product details
    </div>
  </>
}
