import React from "react";

const Like = ({ hoverIndex }) => {
    return (
        <div className="bg-white p-1 rounded-xl flex gap-1 shadow-lg w-72">
            <div className=" hover:-translate-y-[2px]">
                <img
                    onClick={alert}
                    className="w-8 h-8 animate-wiggle"
                    src="https://tse3.mm.bing.net/th?id=OIP.n05W4n89KGhhgOTtMBX1JQHaHa&pid=Api&P=0&h=180"
                    alt=""
                    srcset=""
                />
            </div>

            <div className=" hover:-translate-y-[2px]">
                <img
                    className="w-8 h-8 animate-wiggle"
                    src="https://www.freepngimg.com/thumb/facebook/65441-emoticon-like-button-haha-facebook-emoji.png"
                    alt=""
                    srcset=""
                />
            </div>

            <div className=" hover:-translate-y-[2px]">
            <img
                className="w-8 h-8 animate-wiggle"
                src="https://zentalk.vn/styles/themehouse/reactions/love.png"
                alt=""
                srcset=""
            />
            </div>

            <div className=" hover:-translate-y-[2px]">
            <img
                className="w-8 h-8 animate-wiggle"
                src="https://www.iphone-droid.net/wp-content/uploads/2020/04/Facebook-Care-Reaction.png"
                alt=""
                srcset=""
            />
            </div>
          
            <div className=" hover:-translate-y-[2px]">
            <img
                className="w-8 h-8 animate-wiggle"
                src="https://i1.wp.com/www.vectorico.com/wp-content/uploads/2018/02/Facebook-Wow.png?resize=300%2C300"
                alt=""
                srcset=""
            />
            </div>
       
        </div>
    );
};

export default Like;
