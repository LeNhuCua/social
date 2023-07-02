import React from "react";
import "./storycard.scss";

const StoryCard = ({ user }) => {

  return (
    <div className="relative basis-[20%] m-1 overflow-hidden group cursor-pointer">
      <div className="w-full h-full absolute z-0"></div>

      <img src={user.profilePicture} alt="" className="flex absolute h-11 w-11 rounded-full top-2 left-2 border-4 border-[#0064e8] object-cover" />
      <img src={user.profilePicture} alt="" className="w-full h-[13.75rem] rounded-xl object-cover cursor-pointer group-hover:scale-105 transition-all duration-300" />
      <span className="absolute z-10 w-full text-sm bottom-2 text-center cursor-pointer text-white">{user.username}</span>


    </div>
  );
};

export default StoryCard;
