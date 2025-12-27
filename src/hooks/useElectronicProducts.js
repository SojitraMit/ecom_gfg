import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { addElectronicProducts } from "../utils/storeSlice";

const useElectronicProducts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllProducts = async () => {
      const data = await fetch(BASE_URL + "/categories/2/products");
      const json = await data.json();

      // ✅ FIX: send ARRAY, not object
      dispatch(addElectronicProducts(json));
    };

    getAllProducts();
  }, [dispatch]);
};

export default useElectronicProducts;
