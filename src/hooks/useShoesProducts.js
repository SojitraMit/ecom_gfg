import { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { addShoesProducts } from "../utils/storeSlice";
import { useDispatch } from "react-redux";

const useShoesProducts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllProducts = async () => {
      const data = await fetch(BASE_URL + "/categories/4/products");
      const json = await data.json();

      // ✅ FIX: send ARRAY, not object
      dispatch(addShoesProducts(json));
    };

    getAllProducts();
  }, [dispatch]);
};

export default useShoesProducts;
