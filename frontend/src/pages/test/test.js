import React from "react";
import NavBar from "../../components/navbar/navbar";
import SearchBar from "../../components/searchbar/searchbar";
import PostCard from "../../components/postcard/postcard";
import PostPink from "../../components/postpink/postpink";
import CreatePost from "../../components/createpost/createpost";
import PostModal from "../../components/postmodal/postmodal";
import { TestContainer } from "./test.styles";
import { useState } from "react";
import { useEffect } from "react";

const Test = () => {

    const [allposts, setAllposts] = useState([]);
    const [modalren, setModalren] = useState(false);
    const [modalpost, setModalpost] = useState();

    const get = "GET"
    const header = new Headers({
        'content-type': 'application/json'
    })
    const getconfig = {
        method: get,
        headers: header
    }

    useEffect(() => {
        fetch("http://localhost:8000/posts/", getconfig)
            .then(response => response.json())
            .then(data => setAllposts(data))
            .catch(error => console.log(error))
    },[modalren])

    const changeRender = () => {
        setModalren(!modalren)
    }

    const changePost = (send) => {
        setModalpost(send)
    }

    return (
        <TestContainer>
            {modalren ? <PostModal modalren={changeRender} post={modalpost}/> : ""}
            <NavBar />
            <SearchBar />
            <div className="container">
                <CreatePost />
                {allposts ? allposts.map(element => 
                    <PostCard 
                        post={element} 
                        modalren={changeRender}
                        modalpost={changePost} 
                        key={element.id} />)
                        : <></>
                }
                <PostPink />
            </div>
        </TestContainer>
    )

}

export default Test;

// {modalren ? <PostModal /*post={modalpost}*//> : <></>}