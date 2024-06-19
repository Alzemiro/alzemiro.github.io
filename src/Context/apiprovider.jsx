import React, {useEffect, useMemo} from "react";
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import {RootLayout} from "../Layout/root.layout.jsx";
import {Theme} from "@radix-ui/themes";

export const ApiContext = React.createContext({});
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

export const ApiProvider = () => {


    return (
        <ApiContext.Provider>
            <Theme scaling="95%">
            <RootLayout>
                <Outlet />
                <RemoveHash/>
            </RootLayout>
        </Theme>
        </ApiContext.Provider>
    );
};