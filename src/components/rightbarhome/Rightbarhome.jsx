import React from "react";
import Online from "../online/Online";
import { Usersonline } from "../../data";
import "./rightbarhome.scss";
import Tippy from "@tippyjs/react";
import { AiOutlineSearch, AiOutlineVideoCameraAdd } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

const Rightbarhome = () => {
    return (
        <div className="flex justify-center w-full">
            <div className="rightbarhome flex flex-col   w-full">
                <div className="flex justify-between items-center">
                    <div className="mb-4">
                        <span className="font-semibold text-2xl">Người liên hệ</span>
                    </div>
                    <div className="text-gray-500 flex gap-2 items-center">
                        <Tippy content="Cuộc gọi mới">
                            <div>
                                <AiOutlineVideoCameraAdd size={25}/>
                            </div>
                        </Tippy>
                        <Tippy content="Tìm kiếm theo tên hoặc theo nhóm">
                            <div>
                                <AiOutlineSearch size={25}/>
                            </div>
                        </Tippy>
                        <Tippy content="Tuỳ chọn">
                            <div>
                                <BsThreeDots size={25}/>
                            </div>
                        </Tippy>
                    </div>
                </div>

                <ul className="rightbarFriendList">
                    {Usersonline.map((u) => (
                        <Online key={u.id} onlineuser={u} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Rightbarhome;
