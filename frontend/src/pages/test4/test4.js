import React from "react";
import NavBar from "../../components/navbar/navbar";
import FriendCard from "../../components/friendcard/friendcard";
import { Test4Container } from "./test4.styles";
import { useState, useEffect } from "react";
import { useReducer } from "react";

const Test4 = () => {

    const [allusers, setAllusers] = useState([]);

    const get = "GET"
    const header = new Headers({
        'content-type': 'application/json'
    })
    const getconfig = {
        method: get,
        headers: header
    }

    useEffect(() => {
        fetch("http://localhost:8000/users/", getconfig)
            .then(response => response.json())
            .then(data => setAllusers(data))
            .catch(error => console.log(error))
    },[])

    return (
        <Test4Container>
            <NavBar />
            <div className="cards">
                {allusers.map(e => <FriendCard user={e}/>)}
            </div>
        </Test4Container>
    )

}

export default Test4;