import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import ForgetPass from "../Screen/ForgetPass/ForgetPass";
import PageEnation from "../components/PageEnation/PageEnation";
import NotFound from "../Screen/NotFound/NotFound";

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
  ]);

  return <RouterProvider router={routes} />;
};

export default Router;
