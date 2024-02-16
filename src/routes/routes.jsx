import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {HomePage} from "../pages/Home/home.page.jsx";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
    }

]);

export default function Routes(){
    return <RouterProvider  router={routes}/>
}