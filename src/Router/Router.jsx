import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import ForgetPass from "../Screen/ForgetPass/ForgetPass";
import NotFound from "../Screen/NotFound/NotFound";
import Register from "../Screen/Register/Register";

const Router = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
    {
      path: "/forget-pass",
      element: <ForgetPass />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default Router;
