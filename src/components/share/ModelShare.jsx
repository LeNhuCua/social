import React, { useState } from "react";
import {
    AiFillCloseCircle,
    AiOutlineClose,
    AiOutlineSmile,
    AiOutlineUserAdd,
} from "react-icons/ai";
import { InputTextarea } from "primereact/inputtextarea";

import { Button } from "primereact/button";
import {
    BsFillEmojiSmileFill,
    BsFlagFill,
    BsImages,
    BsThreeDots,
} from "react-icons/bs";
import { CiGps } from "react-icons/ci";
import Tippy from "@tippyjs/react";

const ModelShare = ({ setOpenModel }) => {
    const [value, setValue] = useState("");

    return (
        <div className="">
            <div className="absolute left-0 top-0 z-[49] w-[100%] min-h-[100vh] bg-[rgba(244,245,247,0.8)]"></div>
            <div className="relative bg-white border rounded-xl shadow-xl  z-[49] -top-1/2 -translate-y-1/2">
                <div
                    onClick={() => setOpenModel(false)}
                    className="absolute right-1 top-1 w-10 h-10 cursor-pointer border bg-[#E4E6EB] hover:bg-gray-300 flex items-center justify-center rounded-full"
                >
                    <AiOutlineClose size={25} />
                </div>

                <div>
                    <div className="border-b py-2">
                        <h1 className="text-center font-bold text-2xl">
                            Tạo bài viết
                        </h1>
                    </div>
                    <div className="p-2 flex flex-col gap-3">
                        <div className="flex items-center">
                            <img
                                src="/assets/person/user.png"
                                alt=""
                                className="w-[50px] h-[50px] rounded-full mr-5 object-cover"
                            />
                            <div>
                                <h1 className="font-semibold">Lê Của</h1>
                                <h3>Bạn bè</h3>
                            </div>
                        </div>
                        <div className=" w-full ">
                            <InputTextarea
                                autoResize
                                className="w-full outline-none border-none"
                                h-full
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                rows={5}
                                cols={30}
                                placeholder="Của ơi, bạn đang nghĩ gì thế "
                            />
                        </div>
                        <div className="flex justify-between items-center">
                            <Button
                                icon="pi pi-bookmark"
                                severity="secondary"
                                aria-label="Bookmark"
                            />

                            <BsFillEmojiSmileFill size={30}/>
                        </div>
                        <div className="border-2 rounded-lg p-3 flex items-center justify-between">
                            <div>
                                <h1>Thêm vào bài viết của bạn</h1>
                            </div>
                            <div className="flex items-center justify-between gap-3 text-xl">
                                <Tippy content="Ảnh/Video">
                                    <div className="text-green-500 cursor-pointer">
                                        <BsImages />
                                    </div>
                                </Tippy>
                                <Tippy content="Gắn thẻ người khác">
                                    <div className="text-blue-500 cursor-pointer">
                                        <AiOutlineUserAdd />
                                    </div>
                                </Tippy>
                                <Tippy content="Cảm xúc/Hoạt dộng">
                                    <div className="text-yellow-500 cursor-pointer">
                                        <AiOutlineSmile />
                                    </div>
                                </Tippy>
                                <Tippy content="Check in">
                                    <div className="text-red-500 cursor-pointer">
                                        <CiGps />
                                    </div>
                                </Tippy>
                                <Tippy content="Sự kiện trong đời">
                                    <div className="text-blue-400 cursor-pointer">
                                        <BsFlagFill />
                                    </div>
                                </Tippy>

                                <Tippy content="Xem thêm">
                                    <div className=" cursor-pointer">
                                        <BsThreeDots />
                                    </div>
                                </Tippy>
                            </div>
                        </div>
                        <div className="w-full">
                            <Button className="w-full" label="Đăng" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModelShare;
