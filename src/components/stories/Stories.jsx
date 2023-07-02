import React from "react";

import { Users } from "../../data";
import StoryCard from "../storycard/Storycard";
import Tippy from "@tippyjs/react";


const Stories = () => {
    return (
        <div className="flex mb-8 justify-between rounded-xl ">
  
            <div className="flex flex-col basis-[20%] m-1 relative rounded-lg  group  overflow-hidden shadow-md">
                <div className="h-full">
                    <img
                        src="/assets/person/user.png"
                        alt=""
                        className="w-full h-[10.75rem]  object-cover cursor-pointer rounded-t-lg group-hover:scale-105 transition-all duration-300"
                    />
                    <img
                        src="/assets/person/upload.png"
                        alt=""
                        className="absolute left-1/2 w-11 bottom-8 -translate-x-1/2 cursor-pointer"
                    />
                </div>

                <div className="flex justify-center ">
                    <span className=" w-full text-sm bottom-3 text-center cursor-pointer font-semibold ">
                        Tạo tin
                    </span>
                </div>
            </div>

            {Users.map((u) => (
                <StoryCard key={u.id} user={u} />
            ))}
        </div>
    );
};

export default Stories;
