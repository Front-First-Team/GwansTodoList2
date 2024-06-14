import React from "react";
import { Outlet, useLocation } from "react-router-dom";

const LAYOUT_METADATE = {
    "/": {
        header: true,
        footer: true,
    },
    "/todo": {
        header: false,
        footer: true,
    },
}

const RootLayout = () => {
    const location = useLocation()
    console.log(location.pathname)

    return <>
        <Outlet>
            {
            }
        </Outlet>
        <image></image>
    </>
        ;
}
export default RootLayout;