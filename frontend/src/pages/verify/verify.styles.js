import styled from "styled-components"
import img from '../../assets/images/hexa-bg.jpg';
import font from '../../assets/fonts/iso-bold.ttf';
import mail from '../../assets/icons/mail.png';
import pw from '../../assets/icons/pwg.png';
import email from '../../assets/icons/emailg.png';
import val from '../../assets/icons/val.png';



export const VerifyContainer = styled.div`
display: flex;
flex-direction: row;
height: 100vh;
width: 100vw;

@font-face {
    font-family: 'iso-bold';
    src: url(${font});
}

/* {
    border: 1px solid red;
}*/

.signup {
    align-self: flex-end;
    margin-right: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.main {
    width: 100%;
    height: 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: linear-gradient(
    90deg,
    rgba(36, 5, 109, 0) 1%, 
    rgba(36, 5, 109, 0.5) 25%,
    rgba(36, 5, 109, 0.9) 38%,  
    rgba(36, 5, 109, 1) 50%,
    rgba(36, 5, 109, 0.9) 62%,  
    rgba(36, 5, 109, 0.5) 75%, 
    rgba(36, 5, 109, 0) 100%
    ),url(${img});

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    font-family: iso-bold;
    font-size: 75px;
    color: white;
}

.logincontainer {
    width: 800px;
    height: 820px;

    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 70px;
}

p {
    margin-block-end: 30px;
}

.amazing-h2 {
  animation: amazing-h2-glow 1s ease-in-out infinite alternate;
}

@keyframes amazing-h2-glow {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
  }
  to {
    text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
  }
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.top {
    display: flex;
    flex-direction: row;
}

.col {
    display: flex;
    flex-direction: column;
}

label {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 12px;
    font-weight: 400;
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 10px; 
}

input {
    width: 250px;
    height: 50px;
    background: none;
    border: none;
    border-bottom: 2px solid rgba(255, 255, 255, .75);
    font-size: 16px;
    font-weight: 400;
    color: black;
    line-height: 26px;
    color: white;
    margin-left: 15px;
    margin-right: 15px;
}

input:focus {
    outline: none;
}

input::placeholder {
  color: rgba(255, 255, 255, .6);
}

.email {
    background: url(${mail});
    background-repeat: no-repeat;
    background-size: 30px 22px;
    background-position: 5px 14px;
    padding-left: 50px;
}

.val {
    background: url(${val});
    background-repeat: no-repeat;
    background-size: 30px 30px;
    background-position: 5px 14px;
    padding-left: 50px;
}

.first_name,
.last_name {
    background: url(${email});
    background-repeat: no-repeat;
    background-size: 30px 30px;
    background-position: 5px 10px;
    padding-left: 50px;
}

.pw,
.pwc {
    background-image: url(${pw});
    background-repeat: no-repeat;
    background-size: 25px 30px;
    background-position: 10px 10px;
    padding-left: 50px;
}

.glow,
.miniglow {
    border: none;
    outline: none;
    color: #fff;
    background: #111;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 30px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-style: normal; 
}
.glow {
    width: 290px;
    height: 60px;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    margin-top: 60px;
    margin-bottom: 60px;
}
.miniglow {
    width: 150px;
    height: 30px;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    margin-left: 50px;
}

.glow:before,
.miniglow:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #002bff, #7a00ff, #ff00c8, #ff00c8, #7a00ff, #002bff, #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    
    transition: opacity .3s ease-in-out;
    border-radius: 30px;
}

.glow:before {
    animation: glowing 100s linear infinite;
}
.miniglow:before {
    animation: glowing 120s linear infinite;
}

.glow:active,
.miniglow:active {
    color: #fff
}

.glow:active:after,
.miniglow:active:after {
    background: transparent;
}

.glow:after,
.miniglow:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 30px;
}

.circles {
    display: flex;
    flex-direction: row;
    margin-bottom: 50px;
    > img {
        height: 15px;
        width: 15px;
        margin: 0px 15px;
    }
}

@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}

h5 {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    color: white;
    font-weight: 400;
}

.stores {
    display: flex;
    flex-direction: row;
    width: 150px;
    justify-content: space-between;
    > img {
        height: 50px;
    }
}

h6 {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 11px;
    color: white;
    font-weight: 300;
    border-top: 30px;
}
`;