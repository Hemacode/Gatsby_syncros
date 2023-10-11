import React from 'react';
import { Suspense, useEffect, useState, useMemo } from "react";
import { useLocation } from '@reach/router';
import Header from "./header";
import SideBar from "./sidebar";
import "./style.scss";

const LayoutComponent = ({children}: any) => {
    const location = useLocation();

    const menuItems:any  = []

    const [pageTilte, setpageTilte] = useState<boolean>(false);

    useEffect(() => {
        const { pathname } = location;        
        if(pathname === "/devicesetup/"){
          setpageTilte(true)
        }
    }, [location]);

  return (
    <section className="container-wrapper">
    <SideBar menuItems={menuItems} />
    <div className={`container-wrapper__innerblk`}>
        { pageTilte && <Header title={"Device Setup"} />}
        {children}
    </div>
</section>
  )
}

export default LayoutComponent;

export const Head = () => (
    <>
      <link
          href="https://cdn.syncfusion.com/ej2/21.1.35/bootstrap5.css"
          rel="stylesheet"
      />
    </>
  )


