import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Product from "./components/Product";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/product",
      element: <Product />,
    },
  ]);
  return (
    <div className="">
      <Provider store={appStore}>
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
