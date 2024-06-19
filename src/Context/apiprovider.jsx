import React, {useMemo} from "react";
import { Navigate, Outlet } from 'react-router-dom';
import {RootLayout} from "../Layout/root.layout.jsx";
import {Theme} from "@radix-ui/themes";

export const ApiContext = React.createContext({});

export const ApiProvider = () => {

    return (
        <ApiContext.Provider>
            <Theme scaling="95%">
            <RootLayout>
                <Outlet />
            </RootLayout>
        </Theme>
        </ApiContext.Provider>
    );
};