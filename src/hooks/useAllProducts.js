import { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addAllProdects } from "../utils/storeSlice";

const useAllProducts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllProducts = async () => {
      const data = await fetch(BASE_URL + "/products");
      const json = await data.json();

      // ✅ FIX: send ARRAY, not object
      dispatch(addAllProdects(json));
    };

    getAllProducts();
  }, [dispatch]);
};

export default useAllProducts;
