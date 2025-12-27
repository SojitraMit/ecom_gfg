import ProductCard from "./ProductCard";

const ProductList = ({ product }) => {
  return (
    <div className="flex flex-wrap gap-10 justify-center pt-8 bg-gray-200">
      {product?.map((products) => (
        <ProductCard product={products} key={products.id} />
      ))}
    </div>
  );
};

export default ProductList;
