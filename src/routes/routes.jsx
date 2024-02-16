import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "../pages"

const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
    }

]);

export default function Routes(){
    return <RouterProvider  router={routes}/>
}