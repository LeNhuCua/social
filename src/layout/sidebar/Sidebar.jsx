import React, { useContext } from "react";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import VideocamIcon from "@mui/icons-material/Videocam";
import GroupsIcon from "@mui/icons-material/Groups";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import EventIcon from "@mui/icons-material/Event";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import "./sidebar.scss";

import { DarkModeContext } from "./../../context/darkModeContext";
import MenuLink from "../../components/menuLink/MenuLink";
import Friends from "../../components/friends/Friends";
import { Users } from "../../data";
import { AiFillHome, AiOutlineUsergroupDelete } from "react-icons/ai";
import { BiMoviePlay, BiStore } from "react-icons/bi";
import { PiGameControllerBold } from "react-icons/pi";
import { CgMenuGridO } from "react-icons/cg";

const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext);
    return (
        <div className="sidebar ">
            <div className="sidebarWrapper">
                <MenuLink to="/" Icon={<AiFillHome />}>
                    Trang chủ
                </MenuLink>
                <MenuLink to="/info" Icon={<img className="h-6 w-6 object-cover rounded-full" src="/assets/person/user.png" />}>
                    Lê Của
                </MenuLink>
                <div className="border"></div>
                <MenuLink to="/watch" Icon={<BiMoviePlay />}>
                    Watch
                </MenuLink>
                <MenuLink to="/friend" Icon={<AiOutlineUsergroupDelete />}>
                    Bạn bè
                </MenuLink>
                <MenuLink to="/marketplace" Icon={<BiStore />}>
                    Marketplace
                </MenuLink>
                <MenuLink to="/game" Icon={<PiGameControllerBold />}>
                    Trò chơi
                </MenuLink>
                <MenuLink to="/xemtatca" Icon={<CgMenuGridO />}>
                    Xem tất cả
                </MenuLink>
               
                <div className="border sidebarHr"></div>
                <ul className="sidebarFriendList">
                    {Users.map((u) => (
                        <Friends key={u.id} user={u} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
