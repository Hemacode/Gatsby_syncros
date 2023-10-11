
import React from "react";
import Iconbar from "./compontent/menulist";
import { navigate } from "gatsby";

import "./style.scss";

const SideBar = () => {

 
const handleSideBarView = (name: string) => {
       navigate('/devicesetup')
    };
    return (
        <>
            <aside className="aside">
                <Iconbar handleSideBarView ={handleSideBarView } />
            </aside>
            
        </>
    );
};

export default SideBar;
