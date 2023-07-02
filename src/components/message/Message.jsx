import React, { useState } from "react";
import { Link } from "react-router-dom";
import Chat from "./Chat";
import Tippy from "@tippyjs/react";
import { BsPencilSquare, BsThreeDots } from "react-icons/bs";
import { SlSizeFullscreen } from "react-icons/sl";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import SearchIcon from "@mui/icons-material/Search";
import { Chats } from "../../data";
const Message = () => {
    const statusChats = [
        {
            id: 1,
            text: "Hộp thư",
        },
        {
            id: 2,
            text: "Cộng đồng",
        },
    ];
    const [status, setStatus] = useState(1);
    function shuffleArray(array) {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    }
    
    // Sử dụng mảng chats đã được sắp xếp ngẫu nhiên
    const shuffledChats = shuffleArray(Chats);
    console.log(shuffledChats);
    return (
        <div className="absolute  right-0 top-16">
            <div className=" flex flex-col gap-5 p-3 border shadow-md rounded-tl-lg  rounded-tr-lg  bg-white min-h-[80vh] max-h-[80vh] max-w-[30rem] min-w-[20rem] lg:min-w-[30rem] overflow-y-scroll text-black">
                <div className="">
                    <div className="flex justify-between items-center">
                        <h2 className="text-black text-2xl font-bold">Chat</h2>
                        <div className="flex items-center gap-3 text-[rgb(91,98,106)]">
                            <Tippy content="Tuỳ chọn">
                                <div>
                                    <BsThreeDots size={25} />
                                </div>
                            </Tippy>
                            <Tippy content="Xem tất cả trong Message">
                                <div>
                                    <SlSizeFullscreen size={15} />
                                </div>
                            </Tippy>
                            <Tippy content="Tạo phòng hợp mặt mới">
                                <div>
                                    <AiOutlineVideoCameraAdd size={25} />
                                </div>
                            </Tippy>
                            <Tippy content="Tin nhắn mới">
                                <div>
                                    <BsPencilSquare size={20} />
                                </div>
                            </Tippy>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="w-full h-10 bg-[rgb(240,242,245)] rounded-full border border-white flex items-center">
                        <SearchIcon className="text-gray-500 text-lg ml-4 cursor-pointer" />
                        <input
                            type="text"
                            placeholder="Tìm kiếm trên Message"
                            className="border-0 w-[90%] h-8  focus:outline-none bg-transparent"
                        />
                    </div>
                </div>
                <div className="text-black">
                    {statusChats.map((statusChat) => (
                        <button
                            key={statusChat.id}
                            onClick={() => setStatus(statusChat.id)}
                            className={`rounded-2xl p-3 ${
                                status === statusChat.id
                                    ? "bg-blue-100 text-blue-500 "
                                    : ""
                            } font-bold`}
                        >
                            {statusChat.text}
                        </button>
                    ))}
                    {/* <button className="ml-4">Cộng đồng</button> */}
                </div>
                {status === 1 ? (
                    //hộp thư
                    <div className="flex flex-col gap-4">
                        {Chats.map((chat) => (
                            <Chat key={chat.id} data={chat} />
                        ))}
                    </div>
                ) : (
                    //cộng đồng
                    <>
                        <div className="flex flex-col gap-4">
                            {shuffledChats.map((chat) => (
                                <Chat key={chat.id} data={chat} />
                            ))}
                        </div>

                        <h3 className="text-2xl font-semibold">
                            Đoạn chat đề xuất
                        </h3>
                        <div className="flex flex-col gap-4">
                        {
                            Chats.map((chat) => (
                                <Chat key={chat.id} data={chat}/>
                            ))
                        }
                        </div>
                    </>
                )}
            </div>
            <div className="relative bottom-0 bg-white border-t rounded-bl-lg  p-3 rounded-br-lg">
                <Link to="/message" className="hover:underline ">
                    <h3 className="font-semibold text-blue-500 text-center">
                        Xem tất cả trong Message
                    </h3>
                </Link>
            </div>
        </div>
    );
};

export default Message;
