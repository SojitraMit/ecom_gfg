import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addClotheProducts } from "../utils/storeSlice";
import { BASE_URL } from "../utils/constants";

const useClotheProducts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllProducts = async () => {
      const data = await fetch(BASE_URL + "/categories/1/products");
      const json = await data.json();

      // ✅ FIX: send ARRAY, not object
      dispatch(addClotheProducts(json));
    };

    getAllProducts();
  }, [dispatch]);
};

export default useClotheProducts;
