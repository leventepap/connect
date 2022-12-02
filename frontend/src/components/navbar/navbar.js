import React, { useState } from "react";
import { NavBarContainer } from "./navbar.styles";
import pinin from "../../assets/icons/pin-in.png";
import pinac from "../../assets/icons/pin-ac.png";
import userin from "../../assets/icons/user-in.png";
import userac from "../../assets/icons/user-ac.png";
import bellin from "../../assets/icons/bell-in.png";
import bellac from "../../assets/icons/bell-ac.png";
import avatar from "../../assets/images/defavatar.jpg";
import Menu from "../menu/menu";
import Notifications from "../notifications/noti";
import { useNavigate } from "react-router-dom";



const NavBar = () => {

    const navigate = useNavigate()

    const [userren, setUserren] = useState(false)
    const [pinren, setPinren] = useState(false)
    const [bellren, setBellren] = useState(false)
    const [notiren, setNotiren] = useState(false)
    const [menuren, setMenuren] = useState(false) 

    return (
        <NavBarContainer>
            <div className="left">
                <p className="amazing-h2" onClick={() => {navigate(`/main`)}}># CONNECT</p>
                <div className="posts" 
                    onMouseEnter={() => setPinren(!pinren)} 
                    onMouseLeave={() => setPinren(!pinren)}
                    onClick={() => {navigate(`/main`)}}>
                    <img className="icon1" src={window.location.href === 'http://localhost:3000/main' || pinren === true ? pinac : pinin} />
                    <h6>Posts</h6>
                </div>
                <div className="users" 
                    onMouseEnter={() => setUserren(!userren)} 
                    onMouseLeave={() => setUserren(!userren)}
                    onClick={() => {navigate(`/find`)}}>
                    <img className="icon" src={window.location.href === 'http://localhost:3000/find' || userren === true ? userac : userin} />
                    <h6>Find Friends</h6>
                </div>
            </div>
            <div className="right">
                <div className="noti" 
                    onMouseEnter={() => setNotiren(!notiren)} 
                    onMouseLeave={() => setNotiren(!notiren)}
                    onClick={() => setBellren(!bellren)}>
                    <img className="icon" src={bellren || notiren ? bellac : bellin} />
                    <h6>Notifications</h6>
                    <div className="popup1">
                        {bellren ? <Notifications /> : ""}
                    </div>
                </div>
                <img className="icon2" src={avatar} />
                <div className="menu" onClick={() => setMenuren(!menuren)}>
                    <div className="popup2">
                        {menuren ? <Menu /> : ""}
                    </div>
                </div>
            </div>
        </NavBarContainer>
    )

}

export default NavBar;

