import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";

import { FaFacebookMessenger } from "react-icons/fa";
import { AiFillBell, AiOutlineCaretDown } from "react-icons/ai";

import Tippy from "@tippyjs/react";

import Message from "../../components/message/Message";
import SearchIcon from "@mui/icons-material/Search";
import useOnClickOutsideRef from "../../hook/UseOnClickOutsideRef";

import RingList from "../../components/ring/RingList";
import MenuLink from "../../components/menuLink/MenuLink";
import { BiMoviePlay } from "react-icons/bi";
import { DarkModeContext } from "../../context/darkModeContext";
import { ToggleButton } from "primereact/togglebutton";

const Navbar = () => {
    const [openMessage, setOpenMessage] = useState(false);
    const ref = useOnClickOutsideRef(() => setOpenMessage(false));
    const { darkMode, dispatch } = useContext(DarkModeContext);
    console.log(darkMode);
    const [openRing, setOpenRing] = useState(false);
    const refRing = useOnClickOutsideRef(() => setOpenRing(false));

    return (
        <div className="min-w-full h-16 bg-white  flex items-center sticky top-0 z-50 justify-around shadow">
            <div className="flex-[3]">
                <Link to="/">
                    <span className="text-[#1877F2] text-3xl ml-5  cursor-pointer font-bold">
                        facebook{" "}
                    </span>
                </Link>
            </div>
            <div className="hidden xl:block xl:flex-[5]">
                <div className="w-full h-12 bg-[rgb(240,242,245)] rounded-full border border-white flex items-center">
                    <SearchIcon className="text-gray-500 text-lg ml-4 cursor-pointer" />
                    <input
                        type="text"
                        placeholder="Tìm kiếm trên facebook"
                        className="border-0 w-[90%] h-8  focus:outline-none bg-transparent"
                    />
                </div>
            </div>
            <div className=" xl:hidden flex-[5]">
                <div className="w-full h-12 bg-[rgb(240,242,245)] rounded-full border border-white flex items-center">
                    <SearchIcon className="text-gray-500 text-lg ml-4 cursor-pointer" />
                    <input
                        type="text"
                        placeholder="Tìm kiếm trên facebook"
                        className="border-0 w-[90%] h-8  focus:outline-none bg-transparent"
                    />
                </div>
            </div>
            <div className="flex-[4] flex items-center justify-end text-white mr-5">
                <div className="mr-2">
                    {darkMode ? (
                        <div className="bg-black p-2 rounded-2xl"  onClick={() => dispatch({ type: "TOGGLE" })}>
                            <button >Sáng</button>
                        </div>
                    ) : (
                        <div className="bg-black p-2 rounded-2xl"  onClick={() => dispatch({ type: "TOGGLE" })}>

                            <button >Tối</button>
                        </div>
                    )}
                </div>
                <div
                    className="flex text-lg gap-1"
                    ref={openMessage ? ref : refRing}
                >
                    <Tippy content="Messenger">
                        <div
                            onClick={() => {
                                setOpenMessage(!openMessage);
                                setOpenRing(false);
                            }}
                            className={`${
                                openMessage && "bg-blue-100"
                            } flex mr-4 group  hover:bg-gray-300 items-center justify-center relative cursor-pointer bg-[rgb(228,230,235)] rounded-full w-12 h-12 `}
                        >
                            <FaFacebookMessenger
                                size={23}
                                className={`${
                                    openMessage && "text-blue-500"
                                }   text-black`}
                            />
                            <span className="w-5 h-5 bg-red-500 absolute text-xs rounded-full flex items-center justify-center -top-1 -right-1">
                                2
                            </span>
                        </div>
                    </Tippy>
                    {/* bỏ chỗ này */}

                    {openMessage ? <Message /> : ""}

                    <Tippy content="Thông báo">
                        <div
                            onClick={() => {
                                setOpenRing(!openRing);
                                setOpenMessage(false);
                            }}
                            className={`${
                                openRing && "bg-blue-100"
                            } flex mr-4 group  hover:bg-gray-300 items-center justify-center relative cursor-pointer bg-[rgb(228,230,235)] rounded-full w-12 h-12 `}
                        >
                            <AiFillBell
                                size={23}
                                className={`${
                                    openRing && "text-blue-500"
                                }   text-black`}
                            />
                            <span className="w-5 h-5 bg-red-500 absolute text-xs rounded-full flex items-center justify-center -top-1 -right-1">
                                2
                            </span>
                        </div>
                    </Tippy>

                    {openRing ? <RingList /> : ""}
                </div>
                <Tippy content="Tài khoản">
                    <div className="relative">
                        <img
                            src="/assets/person/user.png"
                            alt=""
                            className="flex w-12 h-12 rounded-full border-2 border-white object-cover cursor-pointer"
                        />
                        <div className="absolute right-0 bottom-0">
                            {" "}
                            <div className="bg-[#F0F2F5] rounded-full">
                                <AiOutlineCaretDown className="text-black " />
                            </div>
                        </div>
                    </div>
                </Tippy>
            </div>
        </div>
    );
};

export default Navbar;
