import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PostModalContainer } from "./postmodal.styles";

const PostModal = (props) => {

    const navigate = useNavigate()

    const [deleteren, setDeleteren] = useState(false)

    return (
        <PostModalContainer>
            <div className="modal">
                <div className="exit">
                    <button onClick={() => { props.modalren(); setDeleteren(false) }}></button>
                </div>
                <div className="postmodal">
                    <div className="modalleft">
                        <img src={props.post.image} />
                    </div>
                    <div className="modalright">
                        <div className="modaluser">
                            <img src={props.post.user.avatar} onClick={() => { navigate(`/profile/${props.post.user.id}/`) }} />
                            <div className="modalname">
                                <p>{props.post.user.first_name} {props.post.user.last_name}</p>
                                <p>just now</p>
                            </div>

                            {deleteren ?
                                <div className="modalconfirm">
                                    <div className="left">
                                        <p>Delete this post?</p>
                                    </div>
                                    <div className="right">
                                        <button className="modalyes"></button>
                                        <button className="modalno" onClick={() => setDeleteren(!deleteren)}></button>
                                    </div>
                                </div>
                                : ""}

                            <button className="modaldelete" onClick={() => setDeleteren(!deleteren)}></button>
                        </div>
                        <div className="modaltext">
                            {props.post.content}
                        </div>
                        <div className="modallikes">
                            <div className="modalimages">
                                {props.post.likes.map(e => <img src={e.avatar} onClick={() => { navigate(`/profile/${e.id}/`) }} />)}
                            </div>
                            <p>{props.post.likes.length} likes</p>
                        </div>
                        <div className="modalbuttons">
                            <button className="modallike">Like</button>
                            <button className="modalshare">Share</button>
                        </div>
                    </div>
                </div>
            </div>
        </PostModalContainer>
    )

}

export default PostModal;