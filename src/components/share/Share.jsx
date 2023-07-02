
import React, { useState } from "react";

import { AiOutlineVideoCamera } from "react-icons/ai";
import { CiFaceSmile } from "react-icons/ci";
import { IoMdPhotos } from "react-icons/io";
import ModelShare from "./ModelShare";

const Share = () => {
    const [openModel, setOpenModel] = useState(false);

    return (
        <div className="w-full h-[170%] rounded-2xl shadow-2xl">
            {openModel ? <ModelShare setOpenModel={setOpenModel}/> : ""}
            <div className="p-5 flex flex-col justify-center">
                <div
                    onClick={() => setOpenModel(true)}
                    className="flex items-center"
                >
                    <img
                        src="/assets/person/user.png"
                        alt=""
                        className="w-[50px] h-[50px] rounded-full mr-10 object-cover"
                    />
                    <div className="w-full h-12 bg-[rgb(240,242,245)] rounded-full border border-white flex items-center">
                        Của ơi, bạn đang nghĩ gì thế?
                    </div>
                </div>
                <hr className="m-5" />

                <div className="w-[100%] ">
                    <div className="flex items-center justify-between   ">
                        <div className="flex items-center mr-5 cursor-pointer">
                            <AiOutlineVideoCamera
                                className="text-3xl mr-3"
                                style={{ color: "#bb0000f2" }}
                            />
                            <span className="text-sm">Video trực tiếp</span>
                        </div>
                        <div className="flex items-center mr-5 cursor-pointer">
                            <IoMdPhotos
                                className="text-3xl mr-3"
                                style={{ color: "#2e0196f1" }}
                            />
                            <span className="text-sm">Ảnh/Video</span>
                        </div>
                        {/* <label htmlFor="file" className="flex items-center mr-20 cursor-pointer">
                            <IoMdPhotos
                                className="text-3xl mr-3"
                                style={{ color: "#2e0196f1" }}
                            />
                            <span className="text-sm">Ảnh/Video</span>
                        </label> */}
                        <div className="flex items-center mr-5 cursor-pointer">
                            <CiFaceSmile
                                className="text-3xl mr-3"
                                style={{ color: "#bfc600ec" }}
                            />
                            <span className="text-sm">Cảm xúc/Hoạt động</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Share;
