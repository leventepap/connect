import React from "react";
import { NotiContainer } from "./noti.styles";
import NotiUser from "../noti-user/notiuser";
import NotiSentUser from "../noti-sent-user/notisentuser";

const Notifications = () => {

    return (
        <NotiContainer>
            <div className="received">Received requests</div>
                <NotiUser />
                <NotiUser />
                <NotiUser />
                <NotiUser />
            <div className="sent">Sent requests</div>
                <NotiSentUser />
                <NotiSentUser />
                <NotiSentUser />
                <NotiSentUser />
        </NotiContainer>
    )

}

export default Notifications;