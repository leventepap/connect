import React from "react";
import { NotiSentUserContainer } from "./notisentuser.styles";
import avatar from "../../assets/images/defavatar.jpg";

const NotiSentUser = () => {

    return (
        <NotiSentUserContainer>
            <div className="notileft">
                <img src={avatar} />
                <div className="user">
                    <div className="name">Patricia Sindal</div>
                    <div className="location">Zurich, Switzerland</div>
                </div>
            </div>
            <div className="notiright">
                <button className="pending"></button>
            </div>
        </NotiSentUserContainer>
    )

}

export default NotiSentUser;