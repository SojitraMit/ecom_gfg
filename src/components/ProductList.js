import { useSelector } from "react-redux";
import Filter from "./Filter";
import ProductCard from "./ProductCard";
import Shimmer from "./Shimmer";

const ProductList = () => {
  const selectedProducts = useSelector((store) => store.store.selectedProducts);
  const allProducts = useSelector((store) => store.store.allProducts);
  const category = useSelector((store) => store.store.selectedCategory);

  const isLoading = allProducts.length === 0;

  // 🔄 LOADING STATE
  if (isLoading) {
    return <Shimmer />;
  }

  // 🚫 EMPTY STATE (after loading)

  return (
    <div className="mt-12">
      <div className="text-center text-yellow-950 font-bold">
        <h1 className="text-5xl">{category}</h1>
      </div>
      {(!selectedProducts || selectedProducts.length === 0) && (
        <div className="flex fixed ml-[400px]  text-center w-[900px] mt-44 justify-center  ">
          <p className="text-gray-600 text-lg font-medium">
            Products are not available
          </p>
        </div>
      )}
      <div className="flex pt-8">
        <div className="fixed  w-[300px] bg-slate-100">
          <Filter product={selectedProducts} />
        </div>
        <div className="w-[400px]"></div>

        <div className="flex flex-wrap gap-x-20 gap-y-10  justify-center w-[1600px]">
          {selectedProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
