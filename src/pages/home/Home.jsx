import React from "react";



import "./home.scss";
import Stories from "../../components/stories/Stories";
import Share from "../../components/share/Share";
import { Posts } from "../../data";
import Post from "../../components/post/Post";
import Rightbar from "../../components/rightbar/Rightbar";

const Home = () => {
    return (
        <div className="home">
            <div className="homeContainer">
                <div className="flex-[6]">
                    <div className="p-5">
                        <Stories /> 
                        <Share />
                        {Posts.map((p) => (
                            <Post key={p.id} post={p} />
                        ))}
                    </div>
                </div>
                     
                        <Rightbar />

                      
            </div>
        </div>
    );
};

export default Home;
