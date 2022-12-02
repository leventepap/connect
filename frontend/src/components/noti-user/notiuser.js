import React from "react";
import { NotiUserContainer } from "./notiuser.styles";
import avatar from "../../assets/images/defavatar.jpg";

const NotiUser = () => {

    return (
        <NotiUserContainer>
            <div className="notileft">
                <img src={avatar} />
                <div className="user">
                    <div className="name">Patricia Sindal</div>
                    <div className="location">Zurich, Switzerland</div>
                </div>
            </div>
            <div className="notiright">
                <button className="yes"></button>
                <button className="no"></button>
            </div>
        </NotiUserContainer>
    )

}

export default NotiUser;