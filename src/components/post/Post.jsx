import React, { useState } from "react";
import "./post.scss";
import { Users } from "./../../data";
import { IconButton } from "@mui/material";
import {
    ChatBubbleOutline,
    MoreVert,
    Favorite,
    ThumbUp,
    ThumbUpAltOutlined,
    ShareOutlined,
} from "@mui/icons-material";

import { Link } from "react-router-dom";
import { BsFillChatFill, BsThreeDots } from "react-icons/bs";
import { AiFillLike, AiOutlineClose, AiOutlineLike } from "react-icons/ai";
import { GiEarthAmerica } from "react-icons/gi";
import { FaShare } from "react-icons/fa";
import Like from "./Like";

const Post = ({ post }) => {
    const [hoverIndex, setHoverIndex] = useState(null);

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to="/profile/userId">
                            <img
                                src={
                                    Users.filter((u) => u.id === post.userId)[0]
                                        .profilePicture
                                }
                                alt=""
                                className="postProfileImg"
                            />
                        </Link>
                        <span className="postUsername">
                            {
                                Users.filter((u) => u.id === post.userId)[0]
                                    .username
                            }{" "}
                            <br />
                            <div className="flex gap-1 items-center">
                                <span className="text-gray-500">
                                    {post.date}
                                </span>{" "}
                                <GiEarthAmerica />
                            </div>
                        </span>
                    </div>

                    <div className="postTopRight">
                        <IconButton>
                            <BsThreeDots className="postVertButton" />
                        </IconButton>
                        <IconButton>
                            <AiOutlineClose className="postVertButton" />
                        </IconButton>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post.body}</span>
                    <img src={post.photo} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="flex gap-1">
                        <img
                            className="w-8 h-8"
                            src="http://www.vectorico.com/wp-content/uploads/2018/02/Facebook-Like.png"
                            alt=""
                            srcset=""
                        />

                        <img
                            className="w-8 h-8"
                            src="https://www.freepngimg.com/thumb/facebook/65441-emoticon-like-button-haha-facebook-emoji.png"
                            alt=""
                            srcset=""
                        />

                        <img
                            className="w-8 h-8"
                            src="https://zentalk.vn/styles/themehouse/reactions/love.png"
                            alt=""
                            srcset=""
                        />

                        <span className="postLikeCounter">{post.like}</span>
                    </div>
                    <div className="postBottomRight flex">
                        <span className="text-gray-500 flex gap-3 items-center">
                            <div className="flex items-center gap-2">
                                {post.comment} <BsFillChatFill />
                            </div>
                            <div className="flex items-center gap-2">
                                {post.comment} <FaShare />
                            </div>
                        </span>
                    </div>
                </div>

                <hr className="footerHr" />
                <div className="postBottomFooter relative">
                    <div
                        onMouseLeave={() => setHoverIndex("")}
                        onMouseEnter={() => setHoverIndex(post.id)}
                        className="postBottomFooterItem relative before:absolute before:-top-4 before:h-6 before:w-full before:bg-transparent before:content-['']"
                    >
                        <AiOutlineLike className="footerIcon" />
                        <span className="footerText">Thích</span>
                        <div className="absolute -top-12 left-0">
                            {hoverIndex === post.id ? <Like /> : ""}
                        </div>
                    </div>
                    <div className="postBottomFooterItem">
                        <ChatBubbleOutline className="footerIcon" />
                        <span className="footerText">Bình luận</span>
                    </div>
                    <div className="postBottomFooterItem">
                        <FaShare className="footerIcon" />
                        <span className="footerText">Chia sẻ</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
