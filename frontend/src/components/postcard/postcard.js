import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PostCardContainer } from "./postcard.styles";
import likein from "../../assets/icons/like-in.png";
import likeac from "../../assets/icons/like-ac.png";
import sharein from "../../assets/icons/share-in.png";
import shareac from "../../assets/icons/share-ac.png";

const PostCard = (props) => {

    const navigate = useNavigate()
    const [likeren, setLikeren] = useState(false)
    const [shareren, setShareren] = useState(false)


    return (
        <PostCardContainer image={`${props.post.image}`}>
            <div className="top">
                <img src={props.post.user.avatar} onClick={() => {navigate(`/profile/${props.post.user.id}/`)}}/>
                <div className="poster">
                    <h5>{props.post.user.first_name} {props.post.user.last_name}</h5>
                    <h6>6h ago</h6>
                </div>
            </div>
            
            <div className="text">
                <h4>{props.post.content}</h4>
            </div>
            <div className="image">
                {props.post.image === null ? <></> : <div className="s1" onClick={() => {props.modalren(); props.modalpost(props.post)}}></div>}
            </div>
            
            <div className="bottom">
                <div className="left">
                    <div className="like" onMouseEnter={() => setLikeren(!likeren)} onMouseLeave={() => setLikeren(!likeren)}>
                        <img className="icon" src={likeren ? likeac : likein} />
                        <h6>Like</h6>
                    </div>
                    <div className="share" onMouseEnter={() => setShareren(!shareren)} onMouseLeave={() => setShareren(!shareren)}>
                        <img className="icon" src={shareren ? shareac : sharein} />
                        <h6>Share</h6>
                    </div>
                </div>
                <div className="right">
                    <h6>{props.post.likes.length} likes</h6>
                </div>
            </div>
        </PostCardContainer>
    )

}

export default PostCard;