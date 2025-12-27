import { useSelector } from "react-redux";
import ProductList from "./ProductList";
import Header from "./Header";

const Product = () => {
  const product = useSelector((store) => store.store.selectedProducts);
  return (
    <div>
      <Header />
      <ProductList product={product} />
    </div>
  );
};

export default Product;
