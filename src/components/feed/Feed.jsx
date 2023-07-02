import React from "react";
import { Posts } from "../../data";
import Post from "../post/Post";
import Share from "../share/Share";
import Stories from "../stories/Stories";


const Feed = () => {
  return (
    <div className="flex-[6]">
      <div className="p-5">
        <Stories />
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
