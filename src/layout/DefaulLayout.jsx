import React from "react";
import AppContent from "./main/AppContent";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import Rightbar from "./rightbar/Rightbar";

const DefaulLayout = () => {
    return (
        <div className="">
            <Navbar />
            <div className="flex w-full bg-[#F0F2F5]">
                <Sidebar />
                <AppContent />
                {/* <Rightbar /> */}
            </div>
        </div>
    );
};

export default DefaulLayout;
