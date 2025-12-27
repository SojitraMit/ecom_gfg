import { useSelector } from "react-redux";
import ProductList from "./ProductList";

const Product = () => {
  const product = useSelector((store) => store.store.selectedProducts);
  return (
    <div>
      this page show filter part and all products
      <ProductList product={product} />
    </div>
  );
};

export default Product;
