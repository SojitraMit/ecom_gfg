import { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { addFurnitureProducts } from "../utils/storeSlice";
import { useDispatch } from "react-redux";

const useFurnitureProducts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllProducts = async () => {
      const data = await fetch(BASE_URL + "/categories/3/products");
      const json = await data.json();

      // ✅ FIX: send ARRAY, not object
      dispatch(addFurnitureProducts(json));
    };

    getAllProducts();
  }, [dispatch]);
};

export default useFurnitureProducts;
