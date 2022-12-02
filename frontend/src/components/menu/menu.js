import React from "react";
import { useNavigate } from "react-router-dom";
import { MenuContainer } from "./menu.styles";

const Menu = () => {

    const navigate = useNavigate()

    return (
        <MenuContainer>
            <button className="profile" onClick={() => navigate(`/profile/1/`)}>Profile</button>
            <button className="logout" onClick={() => navigate(`/login`)}>Logout</button>
        </MenuContainer>
    )

}

export default Menu;