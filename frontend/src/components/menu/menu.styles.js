import styled from "styled-components";
import logoutin from "../../assets/icons/logout-in.png";
import logoutac from "../../assets/icons/logout-ac.png";
import profilein from "../../assets/icons/profile-in.png";
import profileac from "../../assets/icons/profile-ac.png";

export const MenuContainer = styled.div`
    width: 181px;
    height: 96px;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    background-color: rgb(36, 37, 38);
    border-radius: 4px;
    margin-right: 10px;
    justify-content: space-around;
    position: relative;
    top: 80px;
    right: 50px;
    border: 1px solid rgba(61, 138, 228, 0.5);
    box-shadow: 0px 0px 1px rgba(61, 138, 228, 0.5), 0px 10px 20px rgba(61, 138, 228, 0.5);

* {
    border: 1px solid red;
}

.profile,
.logout {
    width: 181px;
    height: 40px;
    border-radius: 4px;
    border: none;
    background-color: rgb(36, 37, 38);
    color: white;
    font-size: 14px;
    background-size: 30px 30px;
    background-repeat: no-repeat;
    background-position: 18px 4px;
    :hover {
        box-shadow: 
            inset 0px 0px 5px rgba(61, 138, 228, 0.4),
            inset 0px 0px 10px rgba(61, 138, 228, 0.4),
            inset 0px 0px 15px rgba(61, 138, 228, 0.4), 
            inset 0px 0px 20px rgba(61, 138, 228, 0.4);
        border-radius: 4px;
        cursor: pointer;
    }
}

.profile {
    background-image: url(${profilein});
    :hover {
        background-image: url(${profileac});
    }
}

.logout {
    background-image: url(${logoutin});
    :hover {
        background-image: url(${logoutac});
    }
}

`;