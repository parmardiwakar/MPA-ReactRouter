import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams();

  return (
    <>
      <h1>Product Detail</h1>
      <p>{productId}</p>
      <p><Link to=".." relative="path">Back</Link></p>
    </>
  )
};

export default ProductDetail;
