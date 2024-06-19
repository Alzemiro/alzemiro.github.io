import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client'
import "../index.css";
import '@radix-ui/themes/styles.css';
import "./i18nfy.js"
import { createBrowserRouter, createHashRouter, RouterProvider, useLocation } from "react-router-dom";
import { ApiProvider } from "./Context/apiprovider.jsx";
import { HomePage } from "./pages/Home/home.page.jsx";
import { AboutMe } from "./pages/AboutMe/aboutme.page.jsx";


const router = createHashRouter([
    {
        path: "/",
        element: <ApiProvider/>,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/about-me",
                element: <AboutMe />
            }],

    },
]);

function RemoveHash() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname + location.search;
    if (path !== '/') { // Evita loop infinito na página inicial
      window.history.pushState(null, null, path);
    }
  }, [location]);

  return null;
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
        <RemoveHash />
    </React.StrictMode>
)
