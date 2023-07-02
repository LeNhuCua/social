import React from "react";

import "./rightbar.scss";
import ProfileRightBar from "../../components/profileRightBar/ProfileRightBar";
import Rightbarhome from "../../components/rightbarhome/Rightbarhome";


const Rightbar = ({ profile }) => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightBar /> : <Rightbarhome />}
      </div>
    </div>
  );
};

export default Rightbar;
