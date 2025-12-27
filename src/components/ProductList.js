import ProductCard from "./ProductCard";

const ProductList = ({ product }) => {
  if (!product || product.length === 0) {
    return (
      <div className="flex justify-center items-center h-60 bg-gray-200">
        <p className="text-gray-600 text-lg font-medium">
          Products are not available
        </p>
      </div>
    );
  }

  return (
    <div className="mt-12">
      <div className="text-center text-yellow-950 font-bold">
        <h1 className="text-5xl">{product[0].category.name}</h1>
      </div>
      <div className="flex flex-wrap gap-10 justify-center pt-8 ">
        {product.map((products) => (
          <ProductCard product={products} key={products.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
