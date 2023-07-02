import React, { useState } from "react";
import { Link } from "react-router-dom";
import Ring from "./Ring";
import Tippy from "@tippyjs/react";
import { BsPencilSquare, BsThreeDots } from "react-icons/bs";
import { SlSizeFullscreen } from "react-icons/sl";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import SearchIcon from "@mui/icons-material/Search";
const RingList = () => {
    const statusRings = [
        {
            id: 1,
            text: "Tất cả",
        },
        {
            id: 2,
            text: "Chưa đọc",
        },
    ];
    const [status, setStatus] = useState(1);
    return (
        <div className="absolute  right-0 top-16">
            <div className=" flex flex-col gap-5 p-3 border shadow-md rounded-tl-lg  rounded-tr-lg  bg-white min-h-[80vh] max-h-[80vh] max-w-[30rem] min-w-[20rem] xl:min-w-[30rem] overflow-y-scroll text-black">
                <div className="">
                    <div className="flex justify-between items-center">
                        <h2 className="text-black text-2xl font-bold">
                            Thông báo
                        </h2>
                        <div className="flex items-center gap-3 text-[rgb(91,98,106)]">
                            <Tippy content="Tuỳ chọn">
                                <div>
                                    <BsThreeDots size={25} />
                                </div>
                            </Tippy>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="text-black">
                        {statusRings.map((statusRing) => (
                            <button
                                key={statusRing.id}
                                onClick={() => setStatus(statusRing.id)}
                                className={`rounded-2xl p-3 ${
                                    status === statusRing.id
                                        ? "bg-blue-100 text-blue-500 "
                                        : ""
                                } font-bold`}
                            >
                                {statusRing.text}
                            </button>
                        ))}
                        {/* <button className="ml-4">Cộng đồng</button> */}
                    </div>
                </div>
                <div className="flex justify-between">
                    <h2 className="font-semibold text-xl">Trước đó</h2>
                    <Link className="text-blue-400" to="/">Xem tất cả</Link>
                </div>

                {status === 1 ? (
                    //hộp thư
                    <div className="flex flex-col gap-4">
                        <Ring />
                        <Ring />
                        <Ring />
                            <Ring />
                    </div>
                ) : (
                    //cộng đồng
                    <>
                        <div className="flex flex-col gap-4">
                            <Ring />
                            <Ring />
                          
                        </div>

                      
                    
                    </>
                )}
            </div>
        
        </div>
    );
};

export default RingList;
