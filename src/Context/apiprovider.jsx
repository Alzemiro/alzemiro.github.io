import React, {useMemo} from "react";
import { Navigate, Outlet } from 'react-router-dom';
import {RootLayout} from "../Layout/root.layout.jsx";
import {Theme} from "@radix-ui/themes";

export const ApiContext = React.createContext({});

export const ApiProvider = () => {

    const value = useMemo(() => ({}), []);


    return (
        <ApiContext.Provider value={value}>
            <Theme scaling="95%">
            <RootLayout>
                <Navigate />
                <Outlet/>
            </RootLayout>
        </Theme>
        </ApiContext.Provider>
    );
};