import React from "react";
import { useNavigate } from "react-router-dom";
import { FriendCardContainer } from "./friendcard.styles";

const FriendCard = (props) => {

    const navigate = useNavigate()

    return (
        <FriendCardContainer>
            <img src={props.user.avatar} onClick={() => {navigate(`/profile/${props.user.id}/`)}}/>
            <div className="name" onClick={() => {navigate(`/profile/${props.user.id}/`)}}>{props.user.first_name} {props.user.last_name}</div>
            <div className="location" onClick={() => {navigate(`/profile/${props.user.id}/`)}}>{props.user.city}, {props.user.country}</div>
            <div className="buttons">
                <button className="follow">FOLLOW</button>
                <button className="add">ADD FRIEND</button>
            </div>
            <div className="about">{props.user.description.length > 140 ? `${props.user.description.slice(0, 135)}...` : props.user.description}</div>
            <div className="tags">
                {props.user.interest_tags === undefined || props.user.interest_tags.length === 0 ? "" : props.user.interest_tags.split(' ').map(e => <p>{e}</p> )}
            </div>
        </FriendCardContainer>
    )

}

export default FriendCard;