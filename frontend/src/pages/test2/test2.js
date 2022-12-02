import React from "react";
import NavBar from "../../components/navbar/navbar";
import ProfileCard from "../../components/profile/profile";
import { Test2Container } from "./test2.styles";
import { useParams } from "react-router-dom";

const Test2 = () => {

    const ID = useParams().userID

    return (
        <Test2Container>
            <NavBar />
            <ProfileCard id={ID}/>
            <div className="asd">
            </div>
        </Test2Container>
    )

}

export default Test2;