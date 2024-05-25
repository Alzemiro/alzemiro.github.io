import ReactDOM from 'react-dom/client'
import "../index.css";
import '@radix-ui/themes/styles.css';
import "./i18nfy.js"
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ApiProvider} from "./Context/apiprovider.jsx";
import {HomePage} from "./pages/Home/home.page.jsx";
import {AboutMe} from "./pages/AboutMe/aboutme.page.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <ApiProvider/>,
        children: [
            {
                path: "/",
                element: <HomePage/>
            },
            {
                path: "/about-me",
                element: <AboutMe/>
            }],

    },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
