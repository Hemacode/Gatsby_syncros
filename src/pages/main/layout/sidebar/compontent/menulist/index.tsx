import React from 'react';
import { useCallback, useState } from "react";
import { Link } from "gatsby";
import { map } from "lodash";
import './style.scss';
import { TIconbar } from "../../sidebar.type";

const Icons: TIconbar[] = [
    {
        name: "clock",
        label: "Recent",
    },
    {
        name: "favorites",
        label: "Favorites",
    },
    {
        name: "search",
        label: "Search",
    },
    {
        name: "apps",
        label: "Modules",
    },
    {
        name: "file",
        label: "Home",
    },
    {
        name: "settings",
        label: "Settings",
    },
    {
        name: "help",
        label: "Help",
    }
];

const Iconbar = (props: any) => {
    const { handleSideBarView, isActive } = props;
    const [show, setShow] = useState<boolean>(false);

    const defaultImage: React.ReactEventHandler<HTMLImageElement> = useCallback(() => {
        setShow(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [show]);

    return (
        <>
            <ul>
                <li>
                    <Link to="/main/dashboard">
                        <i className='e-menu-icon icon-synkros-logo-icon'></i>
                    </Link>
                </li>
                {map(Icons,(icon: TIconbar, i: number) => {
                    const { label, name } = icon;
                    return (
                        <li key={i} onClick={() => handleSideBarView(label)} id={label}>
                            <Link to="#" key={i} className={isActive === label ? 'is-active': 'is-normal'}>
                                <i className={`e-menu-icon icon-${name}`}></i>
                                <span>{label}</span>
                            </Link>
                        </li>
                    )
                })}
                <li>
                <Link to="/example">
                    <i className={`e-menu-icon icon-system-admin`}></i>
                    <span>{"GraphQL"}</span>
                </Link>
                </li>
            </ul>
            {/* <ul className="under-list">
                <li className="logout" onClick={handleLogout}>
                    {empImageObj ? (!show ? <img src={`${empImageObj?.images[0]?.imageURL}.jpg`} alt="" onError={defaultImage} /> : employeeObj?.loginName?.slice(0, 2)) : (employeeObj && employeeObj?.loginName?.slice(0, 2))}
                </li>
            </ul> */}

        </>
    );
};

export default Iconbar;
