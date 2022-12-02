import React from "react";
import { ProfilePicContainer } from "./profilepic.styles";

const ProfilePic = () => {

    return (
        <ProfilePicContainer>
            <input className="picupload" type="file"/>
            <button className="remove">Remove</button>
        </ProfilePicContainer>
    )

}

export default ProfilePic;