import React from "react";
import { TagsContainer } from "./tags.styles";

const Tags = (props) => {

    return (
        <TagsContainer>
            <div className="tagleft"></div>
            <div className="tagmiddle">{props.title}</div>
            <button className="tagright" id={props.id} onClick={props.delete}></button>
        </TagsContainer>
    )

}

export default Tags;