import styled from "styled-components"
import font from '../../assets/fonts/iso-bold.ttf';
import menuin from "../../assets/icons/menu-in.png";
import menuac from "../../assets/icons/menu-ac.png";

export const NavBarContainer = styled.div`
display: flex;
flex-direction: row;
width: calc(100vw - (100vw - 100%));
height: 80px;
background: /*rgb(36,5,109)*/ rgb(36, 37, 38);
align-items: center;
justify-content: space-between;
border-radius: 4px;
border-bottom: 1px solid rgba(255, 77, 166, 0.4);
box-shadow: 0px 0px 1px rgba(230, 0, 115, 0.4), 0px 10px 20px rgba(255, 77, 166, 0.4);
z-index: 1;       

@font-face {
    font-family: 'iso-bold';
    src: url(${font});
}

/* {
    border: 1px solid red;
}*/

.left,
.posts,
.users,
.right,
.noti {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.posts {
    margin-right: 70px;
}

.posts,
.users,
.noti {
    :hover {
        cursor: pointer;
    }
}

.icon {
    height: 35px;
    width: 35px;
    margin-right: 10px;
}

.icon1 {
    height: 45px;
    width: 45px;
    margin-right: 10px;
}

.icon2 {
    height: 45px;
    width: 45px;
    margin-right: 30px;
    margin-left: 90px;
    border-radius: 50%;
}

.icon3 {
    height: 35px;
    width: 35px;
}

.menu {
    display:flex;
    flex-direction: column;
    height: 45px;
    width: 45px;
    border-radius: 50%;
    margin-right: 30px;
    background-image: url(${menuin});
    background-position: center;
    background-size: 35px 35px;
    background-repeat: no-repeat;
    :hover {
        cursor: pointer;
        background-image: url(${menuac});
        box-shadow: 
            inset 0px 0px 5px rgba(61, 138, 228, 0.4),
            inset 0px 0px 10px rgba(61, 138, 228, 0.4),
            inset 0px 0px 15px rgba(61, 138, 228, 0.4), 
            inset 0px 0px 20px rgba(61, 138, 228, 0.4);
    }
    justify-content:center;
    align-items:center;
}

h6 {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: white;
    margin-block-start: 0px;
    margin-block-end: 0px;
}

p {
    font-family: 'iso-bold';
    color: white;
    font-size: 28px;
    margin-left: 30px;
    margin-right: 150px;
    margin-block-start: 0px;
    margin-block-end: 0px;
}

.amazing-h2 {
  animation: amazing-h2-glow 5s ease-in-out infinite alternate-reverse;
  :hover {
    cursor: pointer;
    animation: amazing-h2-glow 1s ease-in-out infinite alternate-reverse;
  }
}

@keyframes amazing-h2-glow {
  from {
    text-shadow: 
    0 0 10px #fff,
    0 0 20px #fff,
    0 0 26px #e60073,
    0 0 28px #e60073, 
    0 0 30px #e60073,
    0 0 32px #e60073,
    0 0 34px #e60073, 
    0 0 36px #e60073; 
    /*0 0 38px #e60073,
    0 0 25px #e60073, 
    0 0 30px #e60073,
    0 0 35px #e60073, 
    0 0 40px #e60073,
    0 0 45px #e60073, 
    0 0 50px #e60073,
    0 0 55px #e60073, 
    0 0 60px #e60073,
    0 0 65px #e60073,
    0 0 70px #e60073;*/
  }
  to {
    text-shadow:
    0 0 16px #ff4da6,
    0 0 18px #ff4da6,
    0 0 20px #ff4da6,
    0 0 22px #ff4da6,
    0 0 24px #ff4da6,
    0 0 26px #ff4da6,
    0 0 28px #ff4da6,
    0 0 30px #ff4da6;
    /*0 0 35px #ff4da6,
    0 0 40px #ff4da6, 
    0 0 45px #ff4da6,
    0 0 50px #ff4da6,
    0 0 55px #ff4da6,
    0 0 60px #ff4da6, 
    0 0 65px #ff4da6,
    0 0 70px #ff4da6,*/
  }
}

.noti {
    margin-right: 130px;
}

.popup1 {
    width: 1px;
}
`;