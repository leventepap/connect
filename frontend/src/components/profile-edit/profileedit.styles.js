import styled from "styled-components";

export const ProfileEditContainer = styled.div`
display:flex;
flex-direction: column;
align-items: center;
width: calc(100vw - (100vw - 100%));

/* {
    border: 1px solid red;
}*/

.cover {
    position: relative;
    width: 100%;
    height: 400px;
    overflow: hidden;
    border: 1px solid rgba(82, 68, 255, 0.4);
    box-shadow: 0px 0px 1px rgba(82, 68, 255, 0.4), 0px 10px 20px rgba(82, 68, 255, 0.4);
    > img {
        width: 100%;
        position: absolute;
        top: -9999px;
        left: -9999px;
        right: -9999px;
        bottom: -9999px;
        margin: auto;
    }
}

.editcover {
    display: flex;
    flex-direction: row;
    align-items: center;
    z-index: 0;
    margin-top: -330px;
    width: 1152px;
    height: 65px;
    justify-content: flex-end;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: white;
    .coverright {
        display: flex;
        flex-direction: row;
        align-items: center;
            :hover {
            cursor: pointer;
        }
        > img {
            width: 35px;
            height: 35px;
            margin-right: 15px;
        }
    }  
}

.card {
    display: flex;
    flex-direction: row;
    z-index: 0;
    width: 1152px;
    height: 730px;
    background: rgb(36,37,38);
    border-radius: 4px;
    box-shadow: 0px 0px 1px rgba(82, 68, 255, 0.4), 0px 10px 20px rgba(82, 68, 255, 0.4);
    border: 1px solid rgba(82, 68, 255, 0.4);
    margin-bottom: 70px;
}

.left {
    width: 319px;
    height: 730px;
    border-right: 1px solid rgba(82, 68, 255, 0.4);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.lefttop {
    > img {
        width: 85px;
        height: 85px;
        border-radius: 50%;
        margin-top: 50px;
    }
}

.leftbottom {
    margin-bottom: 70px;
}

.lefttop,
.leftbottom {
    display: flex;
    flex-direction: column;
    align-items: center;
}

@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}

.update,
.delete,
.save,
.add {
    font-size: 9px;
    font-weight: 400;

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
    :before {
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
    :active {
        color: #fff
    }
    :active:after {
        background: transparent;
    }
    :after {
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
}

.update {
    margin-top: 25px;
    width: 155px;
    height: 40px;
    :before {
        animation: glowing 100s linear infinite;
    }
}
.delete {
    width: 202px;
    height: 48px;
    :before {
        animation: glowing 130s ease-in-out infinite;
    }
}
.save {
    margin-top: 20px;
    width: 202px;
    height: 48px;
    :before {
        animation: glowing 100s ease-in-out infinite;
    }
}

.add {
    width: 75px;
    height: 32px;
    :before {
        animation: glowing 100s ease-in-out infinite;
    }
}

.right {
    display: flex;
    flex-direction: column;
    width: 832px;
    height: 730px;
}

.top {
    display: flex;
    flex-direction: row;
    width: 832px;
    height: 470px;
}

.topleft,
.topright {
    display: flex;
    flex-direction: column;
    height: 450px;
    width: 320px;
    margin-top: 20px;
    margin-left: 60px;
    .password {
        letter-spacing: 6px;
    }
}

label {
    color: white;
    font-size: 12px;
    font-weight: 400;
    margin-top: 40px;
    margin-bottom: 5px;
}

.topright,
.topleft {
    > input {
        border: none;
        border-bottom: 2px solid rgba(255, 255, 255, .5);
        font-size: 16px;
        font-weight: 400;
        color: white;
        line-height: 26px;
        padding-bottom: 13px;
        background: none;
        :focus {
            outline: none;
        }
    }
}

.interestsList {
        border: none;
        border-bottom: 2px solid rgba(255, 255, 255, .5);
        font-size: 16px;
        font-weight: 400;
        color: white;
        line-height: 26px;
        padding-bottom: 13px;
        background: none;
        width: 600px;
        margin-right: 25px;
        :focus {
            outline: none;
        }
}

textarea {
    height: 98px;
    width: 100%;
    border: none;
    font-size: 16px;
    resize: none;
    border-bottom: 2px solid (255, 255, 255, .5);
    outline: none;
    background: none;
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    font-weight: 400;
    ::-webkit-scrollbar {
    width: 8px;
    }
    ::-webkit-scrollbar-track {
    background: rgb(25,26,27);
    }
    ::-webkit-scrollbar-thumb {
    background: rgba(82, 68, 255, 0.4);
    }
    ::-webkit-scrollbar-thumb:hover {
    background: rgb(176, 179, 184);
    }
}

.bottom {
    margin: 0px 60px;
    display: flex;
    flex-direction: column;
    > label {
        margin-top: 40px;
        margin-bottom: 20px;
    }
    .tagscontainer {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-bottom: 40px;
    }
}
`;