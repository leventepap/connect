import React, { useState } from "react";
import { PostCardContainer } from "./postpink.styles";
import avatar from "../../assets/images/defavatar.jpg";
import likein from "../../assets/icons/like-in.png";
import likeac from "../../assets/icons/like-ac.png";
import sharein from "../../assets/icons/share-in.png";
import shareac from "../../assets/icons/share-ac.png";
import s1 from "../../assets/images/sample1.jpg";
import s2 from "../../assets/images/sample2.jpg";
import s3 from "../../assets/images/sample3.jpg";
import s4 from "../../assets/images/sample4.jpg";

const PostPink = () => {

    const [likeren, setLikeren] = useState(false)
    const [shareren, setShareren] = useState(false)


    return (
        <PostCardContainer>
            <div className="top">
                <img src={avatar} />
                <div className="poster">
                    <h5>Patricia Sindal</h5>
                    <h6>6h ago</h6>
                </div>
            </div>

            <div className="text">
                <h4>Lorem ipsum dolor sit amet, vim ut quas volumus probatus, has tantas laudem iracundia et, ad per utamur ceteros apeirian…</h4>
            </div>

            <div className="image">
                <div className="topimg">
                    <div className="s1"></div>
                    <div className="s2"></div>
                </div>
                <div className="bottomimg">
                    <div className="s3"></div>
                    <div className="s4"></div>
                </div>
            </div>

            <div className="bottom">
                <div className="left">
                    <div className="like" onMouseEnter={() => setLikeren(!likeren)} onMouseLeave={() => setLikeren(!likeren)}>
                        <img className="icon" src={likeac} /*src={likeren ? likeac : likein}*/ />
                        <h6>Like</h6>
                    </div>
                    <div className="share" onMouseEnter={() => setShareren(!shareren)} onMouseLeave={() => setShareren(!shareren)}>
                        <img className="icon" src={shareac} /*src={shareren ? shareac : sharein}*/ />
                        <h6>Share</h6>
                    </div>
                </div>
                <div className="right">
                    <h6>2 likes</h6>
                </div>
            </div>
        </PostCardContainer>
    )

}

export default PostPink;