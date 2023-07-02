import React from "react";
import { BsBellSlash } from "react-icons/bs";

const Chat = ({ data }) => {
    return (
        <div className=" p-3 rounded-lg hover:bg-gray-200 cursor-pointer transition-all duration-300">
            <div className="flex gap-3 items-center justify-between ">
                <div className="flex gap-3 items-center">
                    <div className="w-16 h-16 rounded-full">
                        <img
                            className="w-full h-full rounded-full object-cover"
                            src={data.profilePicture}
                            alt="anh"
                        />
                    </div>

                    <div>
                        <div>
                            <h3 className={`${data.watched === false ? "font-semibold" : ""}`}>{data.username}</h3>
                            <h3>
                                <span className={`${data.watched === false ? "font-semibold" : ""}`}> {data.message}{" "}</span>
                               
                                <span className="text-gray-600">
                                    {data.time}
                                </span>
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    {data.ring === false ? <BsBellSlash /> : ""}
                    {data.watched === false ? (
                        <div className="relative">
                            <div className=" bg-blue-600 w-4 h-4 rounded-full  border-2 border-white "></div>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </div>
    );
};

export default Chat;
