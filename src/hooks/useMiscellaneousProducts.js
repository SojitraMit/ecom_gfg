import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { addMiscellaneousProducts } from "../utils/storeSlice";

const useMiscellaneousProducts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllProducts = async () => {
      const data = await fetch(BASE_URL + "/categories/5/products");
      const json = await data.json();

      // ✅ FIX: send ARRAY, not object
      dispatch(addMiscellaneousProducts(json));
    };

    getAllProducts();
  }, [dispatch]);
};

export default useMiscellaneousProducts;
