import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";

const Router = () => {
    const routes = createBrowserRouter([
        {
            path:"/",
            element:<Layout/>

        }
    ])

    return (
        <RouterProvider router ={routes}/>
    )
}

export default Router;