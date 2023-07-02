import React from "react";
import { BsBellSlash } from "react-icons/bs";

const Ring = () => {
    return (
        <div className=" p-3 rounded-lg hover:bg-gray-200 cursor-pointer transition-all duration-300">
            <div className="flex gap-3 items-center justify-between ">
                <div className="flex gap-3 items-center">
                    <div className="w-16 h-16 rounded-full">
                        <img
                            className="w-full h-full rounded-full object-cover"
                            src="https://tse3.mm.bing.net/th?id=OIP.92WCbMwiSg5gZnmkgxte2wHaDt&pid=Api&P=0&h=180"
                            alt="anh"
                        />
                    </div>

                    <div>
                        <div>
                            <h3><span className="font-semibold">Nguyễn An</span> đã chi sẻ bài viết của <span className="font-semibold">ABCD</span></h3>
                            <h3>
                               
                                <span className="text-gray-600">1 phút trước</span>
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <BsBellSlash />
                    <div className="relative">
                        <div className=" bg-blue-600 w-4 h-4 rounded-full  border-2 border-white "></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ring;
