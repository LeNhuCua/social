import React from "react";
import "./menuLink.scss";
import { Link, useLocation } from "react-router-dom";
const MenuLink = ({ Icon, children, to }) => {
    const location = useLocation();
    const match = location.pathname === "/" + to || location.pathname === to;
    return (
        <div className="flex relative items-center font-[500] rounded-2xl cursor-pointer">
            <Link
                to={to}
                className={
                    match
                        ? "flex p-4 items-center text-xl  font-[500] rounded-2xl cursor-pointer before:absolute  before:content-[''] before:-left-2 before:h-[90%] before:w-2 before:bg-blue-600 before:rounded-tr-md before:rounded-br-md before:transition-all before:duration-300 "
                        : "flex p-4 items-center  text-xl  font-[500] rounded-2xl cursor-pointer"
                }
                href="##"
            >
                <div className={`${match ? "text-blue-600" : ""} text-2xl`}>{Icon}</div>
                <span className="ml-4 mr-2"> {children}</span>
            </Link>
            {/*          
            <span className="ml-4 mr-2">{text}</span>
            <span className="font-bold text-lg">
                {text === "Logout" && "(Amber)"}
            </span> */}
        </div>
    );
};

export default MenuLink;
