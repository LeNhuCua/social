import React, { useState } from "react";
import "./online.scss";
import Chat from "./Chat";
import useOnClickOutsideRef from "../../hook/UseOnClickOutsideRef";

const Online = ({ onlineuser }) => {
    const [chat, setChat] = useState("");
    const ref = useOnClickOutsideRef(() => setChat(""));
    return (
        <div className="online">
            <li onClick={() => setChat(onlineuser)} className="rightbarFriend">
                <div className="rightbarProfileImgContainer">
                    <div class="relative">
                        <span class="absolute text-green-500 right-0 bottom-0">
                            <svg width="20" height="20">
                                <circle
                                    cx="8"
                                    cy="8"
                                    r="8"
                                    fill="currentColor"
                                ></circle>
                            </svg>
                        </span>
                        <img
                            src={onlineuser.profilePicture}
                            alt=""
                            class="w-10 sm:w-16 h-10 sm:h-16 rounded-full"
                        />
                    </div>
                </div>
                <span className="rightbarUsername">{onlineuser.username}</span>
            </li>
            <div ref={ref}>
            {chat.id === onlineuser.id ? (
                <Chat  chat={chat} setChat={setChat} />
            ) : (
                ""
            )}
            </div>
        
            {/* dfs */}
        </div>
    );
};

export default Online;
