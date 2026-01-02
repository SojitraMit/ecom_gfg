import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./components/Home";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";

import useAllProducts from "./hooks/useAllProducts";
import useClotheProducts from "./hooks/useClotheProducts";
import useElectronicProducts from "./hooks/useElectronicProducts";
import useFurnitureProducts from "./hooks/useFurnitureProducts";
import useShoesProducts from "./hooks/useShoesProducts";
import useMiscellaneousProducts from "./hooks/useMiscellaneousProducts";
import AuthLogin from "./components/AuthLogin";

const appRouter = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/product", element: <Product /> },
  { path: "/cart", element: <Cart /> },
  { path: "/wishlist", element: <Wishlist /> },
  { path: "/auth/login", element: <AuthLogin /> },
]);

const AppContent = () => {
  // ✅ NOW Redux Provider ALREADY EXISTS
  useAllProducts();
  useClotheProducts();
  useElectronicProducts();
  useFurnitureProducts();
  useShoesProducts();
  useMiscellaneousProducts();

  return <RouterProvider router={appRouter} />;
};

export default AppContent;
