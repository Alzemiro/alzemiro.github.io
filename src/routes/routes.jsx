import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {HomePage} from "../pages/Home/home.page.jsx";
import { AboutMe } from './../pages/AboutMe/aboutme.page';

const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
    },
    {
        path:"/about-me",
        element: <AboutMe/>
    }

]);

export default function Routes(){
    return <RouterProvider  router={routes}/>
}